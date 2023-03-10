
export function bufferToString(buffer: Buffer) {
  var bufferView = new Uint16Array(buffer); // 创建一个无符号16位整数类型的数组
  var str = '';

  // 遍历 TypedArray 对象中的每个字符，并将其转换为字符串
  for (var i = 0; i < bufferView.length; i++) {
    str += String.fromCharCode(bufferView[i]);
  }
  return str; // 返回字符串
}

export function stringToBuffer(str:String) {
  var buffer = new ArrayBuffer(str.length * 2); // 创建一个缓冲区
  var bufferView = new Uint16Array(buffer); // 创建一个无符号16位整数类型的数组

  // 遍历字符串中的每个字符，并将其存储在 TypedArray 对象中
  for (var i = 0; i < str.length; i++) {
    bufferView[i] = str.charCodeAt(i);
  }

  return buffer; // 返回创建的缓冲区
}


export function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
