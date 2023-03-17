export enum ActionCommands {
  CID_AuthLoginReq = 1001,
  CID_AuthLoginRes = 1002,
  CID_AuthPreLoginReq = 1003,
  CID_AuthPreLoginRes = 1004,
  CID_AuthStep1Req = 1005,
  CID_AuthStep1Res = 1006,
  CID_AuthStep2Req = 1007,
  CID_AuthStep2Res = 1008,
  CID_LoadChatsReq = 2001,
  CID_LoadChatsRes = 2002,
  CID_SendReq = 3001,
  CID_SendRes = 3002,
  CID_OtherNotify = 4001,
}

export const ActionCommandsName = {
  1001: "CID_AuthLoginReq",
  1002: "CID_AuthLoginRes",
  1003: "CID_AuthPreLoginReq",
  1004: "CID_AuthPreLoginRes",
  1005: "CID_AuthStep1Req",
  1006: "CID_AuthStep1Res",
  1007: "CID_AuthStep2Req",
  1008: "CID_AuthStep2Res",
  2001: "CID_LoadChatsReq",
  2002: "CID_LoadChatsRes",
  3001: "CID_SendReq",
  3002: "CID_SendRes",
  4001: "CID_OtherNotify",
};

export const getActionCommandsName = (cid:ActionCommands)=>{
   return ActionCommandsName[cid] || cid.toString();
}
