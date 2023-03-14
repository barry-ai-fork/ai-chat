import {USER_CONFIG} from './context';
import {ENV} from './env.js';

// 发送消息到ChatGPT
export async function sendMessageToChatGPT(message, history) {
  try {
    const body = {
      model: 'gpt-3.5-turbo',
      ...USER_CONFIG.OPENAI_API_EXTRA_PARAMS,
      messages: [...(history || []), {role: 'user', content: message}],
    };
    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ENV.OPENAI_API_KEY}`,
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
    if (resp.error?.message) {
      return `OpenAI API error\n> ${resp.error.message}}`;
    }
    return resp.choices[0].message.content;
  } catch (e) {
    console.error(e);
    return `invoke openai error, message : ${e.message}`;
  }
}

