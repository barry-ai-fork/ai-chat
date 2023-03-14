import {stringToBuffer} from "../helpers/buffer";
import {kv,ENV} from "../helpers/env";
import {sendMessageToChatGPT} from "../helpers/openai";
import {decode} from "worktop/buffer";
import {USER_CONFIG} from "../helpers/context";

function binaryToString(binary) {
  var bytes = new Uint8Array(binary.length / 8);
  for (var i = 0; i < binary.length; i += 8) {
    bytes[i / 8] = parseInt(binary.substr(i, 8), 2);
  }
  return String.fromCharCode.apply(null, bytes);
}

export enum AiChatRole {
  NONE,
  USER,
  ASSISTANT
}

export class ModelMsg{
  public user_id: string;
  public chatId: string;
  public senderId: string;
  public msg: any;
  public aiRole?: AiChatRole;
  constructor(user_id:string,chatId:string,senderId:string) {
    this.user_id = user_id
    this.chatId = chatId
    this.senderId = senderId
    this.aiRole = AiChatRole.NONE
  }
  async getAllKeys(){
    const keys = await kv.list({
      prefix:`MSG_${this.user_id}_${this.chatId}_`
    });
    return keys.map(key=>key.name);
  }

  async getAllMsgList(){
    const keys = await this.getAllKeys();
    const rows = [];
    for (let i = 0; i < keys.length; i++) {
      rows.push(JSON.parse(await kv.get(keys[i])))
    }
    return rows;
  }
  async clearAiMsgHistory() {
    const keys = await this.getAllKeys();
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      const json = JSON.parse(await kv.get(key));
      if(json.aiRole !== AiChatRole.NONE){
        json.aiRole = AiChatRole.NONE;
        await await kv.put(key,JSON.stringify(json));
      }
    }
  }
  async getAiMsgHistory(){
    const keys = await this.getAllKeys();
    const history = [
      {role: 'system', content: USER_CONFIG.SYSTEM_INIT_MESSAGE},
    ];

    const msgIds = []
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      const [prefix,user_id,chatId,msgId] = key.split("_");
      msgIds.push(parseInt(msgId));
    }
    msgIds.sort((a,b)=>(a - b))
    for (let i = 0; i < msgIds.length; i++) {
      const msgId = msgIds[i]
      const json = JSON.parse(await kv.get(`MSG_${this.user_id}_${this.chatId}_${msgId}`));
      const obj = new ModelMsg(this.user_id,this.chatId,json.senderId);
      obj.aiRole = json.aiRole;
      obj.setMsg(json.msg)
      if(obj.aiRole !== AiChatRole.NONE){
        history.push({
          role:obj.aiRole === AiChatRole.USER ? "user" : "assistant",
          content:obj.getMsgText()
        })
      }
    }
    const MAX_TOKEN_LENGTH = 2000;
    if (ENV.AUTO_TRIM_HISTORY && ENV.MAX_HISTORY_LENGTH > 0) {
      // 历史记录超出长度需要裁剪
      if (history.length > ENV.MAX_HISTORY_LENGTH) {
        history.splice(history.length - ENV.MAX_HISTORY_LENGTH + 2);
      }
      // 处理token长度问题
      let tokenLength = 0;
      for (let i = history.length - 1; i >= 0; i--) {
        const historyItem = history[i];
        let length = 0;
        if (historyItem.content) {
          length = Array.from(historyItem.content).length;
        } else {
          historyItem.content = '';
        }
        // 如果最大长度超过maxToken,裁剪history
        tokenLength += length;
        if (tokenLength > MAX_TOKEN_LENGTH) {
          history.splice(i);
          break;
        }
      }
    }
    return history;
  }

  setMsg(msg:any){
    this.msg = msg;
  }
  setMsgId(id:number){
    this.msg.id = id;
  }
  getMsgText(){
    if(this.msg && this.msg.content.text && this.msg.content.text.text){
      return this.msg.content.text.text;
    }else{
      return "";
    }
  }
  setMsgText(text:string){
    this.msg.content.text.text = text;
  }
  async genMsgId(){
    let msgId =  await kv.get(`MSG_INCR_${this.user_id}`);
    if(!msgId){
      msgId = 10000;
    }else{
      msgId = parseInt(msgId) + 1;
    }
    return msgId
  }

  async saveMsgId(msgId:number){
    await kv.put(`MSG_INCR_${this.user_id}`,msgId.toString())
    return msgId
  }
  async incrMsgId(){
    return await this.saveMsgId(await this.genMsgId());
  }
  async save(){
    if(this.msg){
      await kv.put(`MSG_${this.user_id}_${this.chatId}_${this.msg.id}`,JSON.stringify({
        aiRole:this.aiRole,
        senderId:this.senderId,
        msg:this.msg
      }));
    }
  }
}

export async function sendMsg(dataJson:Record<string, any>,user_id:string,websocket:{send:any}){
  const {msg} = dataJson.data;
  const {chatId,id} = msg;
  const msgModel = new ModelMsg(user_id,chatId,user_id);
  const msgId =await msgModel.incrMsgId();
  msgModel.setMsg({
    ...msg,
    id:msgId
  });
  if(websocket){
    websocket.send(JSON.stringify({
      action:"updateMessageSendSucceeded",
      data:{
        localMsgId:id,
        msg:msgModel.msg
      }
    }))
    if(chatId != user_id){
      if(chatId === ENV.USER_ID_CHATGPT){
        if(msgModel.getMsgText()){
          if(msgModel.getMsgText().indexOf("/") === 0){
            msgModel.save().catch(console.error)
            const msgModelBotCmdReply = new ModelMsg(user_id,chatId,chatId);
            msgModelBotCmdReply.setMsg({
              ...msg,
              senderId:chatId,
              isOutgoing:false,
              id:await msgModelBotCmdReply.incrMsgId(),
              content:{
                text:{
                  text:"[[thinking...]]"
                }
              }
            });
            switch (msgModel.getMsgText()){
              case "/start":
                msgModelBotCmdReply.setMsgText("/start")
                break
              case "/clear":
                await msgModel.clearAiMsgHistory();
              case "/history":
                const history = await msgModel.getAiMsgHistory();
                console.log(history)
                msgModelBotCmdReply.setMsgText(`==============\nHistory\n==============\n\n${history.map(({role,content})=>{
                    return `${role === "user" ? "\n>" : "<"}:${content}`
                }).join("\n")}`)
                break
              default:
                return;
            }

            msgModelBotCmdReply.save().catch(console.error)
            websocket.send(JSON.stringify({
              action:"newMessage",
              data:{
                msg:msgModelBotCmdReply.msg
              }
            }))
          }else{
            const history = await msgModel.getAiMsgHistory();
            const msgModelBotReply = new ModelMsg(user_id,chatId,chatId);
            msgModelBotReply.setMsg({
              ...msg,
              senderId:chatId,
              isOutgoing:false,
              id:await msgModelBotReply.incrMsgId(),
              content:{
                text:{
                  text:"[[thinking...]]"
                }
              }
            });
            websocket.send(JSON.stringify({
              action:"newMessage",
              data:{
                msg:msgModelBotReply.msg
              }
            }))
            const [error,reply] = await sendMessageToChatGPT(msgModel.getMsgText(),history);
            if(!error){
              msgModelBotReply.aiRole = AiChatRole.ASSISTANT;
              msgModel.aiRole = AiChatRole.USER;
            }
            msgModel.save().catch(console.error);
            msgModelBotReply.setMsgText(reply)
            websocket.send(JSON.stringify({
              action:"newMessage",
              data:{
                msg:msgModelBotReply.msg
              }
            }))
            msgModelBotReply.save().catch(console.error)
          }

        }
      }else{
        msgModel.save().catch(console.error)
      }
    }else{
      msgModel.save().catch(console.error)
    }
  }
  return {msg:msgModel.msg};
}
