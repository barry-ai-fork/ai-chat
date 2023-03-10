import {github,google} from "../thirdParty/worker-auth-providers";
import {ResponseJson} from "../helpers/network";
import * as queryString from "query-string";
import { HS256 } from 'worktop/jwt';
import { SHA1 } from 'worktop/crypto';

import * as utils from 'worktop/utils';
import { reply } from 'worktop/response';
import {generateRandomString} from "../helpers/buffer";
import {AuthForm, AuthResponse, AuthTokenForm, AuthUser} from "../types";

//@ts-ignore
const DATABASE = global.DATABASE;

//@ts-ignore
const TOKEN_EXPIRE_TIME_SEC = parseInt(global.TOKEN_EXPIRE_TIME_SEC);

//@ts-ignore
const FRONTEND_AUTH_CALLBACK_URL = global.FRONTEND_AUTH_CALLBACK_URL;

//@ts-ignore
const clientId = global.GITHUB_CLIENT_ID;

//@ts-ignore
const clientSecretGithub = global.GITHUB_CLIENT_SECRET;

//@ts-ignore
const jwtSecret = global.JWT_SECRET;

const jwt = HS256({
  key:jwtSecret,
})

function generateJWT(user: AuthUser) {
  const iat = Math.ceil(+(new Date()) / 1000);
  const exp = iat + TOKEN_EXPIRE_TIME_SEC
  console.log("[iat, exp]", iat, exp);
  return jwt.sign({
    iat,
    exp,
    iss:user.user_id
  });
}


export async function GithubRedirect(request:Request){
  return Response.redirect(await github.redirect({
    options: {
      clientId,
    }
  }), 302)
}

export async function GithubCallback(request:Request){
  try {
    const { user: providerUser } = await github.users({
      options: { clientSecret:clientSecretGithub, clientId },
      request,
    });
    let user_id = await DATABASE.get(`U_GH_${providerUser.id}`);
    let authUser:AuthUser;

    await DATABASE.put(`U_GH_U_${providerUser.id}`,JSON.stringify(providerUser));
    if(user_id === null){
      user_id = await DATABASE.get(`U_E_UID_${providerUser.email}`);
      if(user_id){
        authUser = JSON.parse(await DATABASE.get(`U_${user_id}`));
        if(!authUser.github_id){
          authUser.github_id = providerUser.id.toString();
        }
      }else{
        user_id = utils.uuid()
        authUser = {
          salt:generateRandomString(6),
          user_id,
          name: providerUser.name,
          avatar: providerUser.avatar_url,
          email: providerUser.email || "",
          github_id: providerUser.id.toString(),
        };
        if(providerUser.email){
          await DATABASE.put(`U_E_UID_${providerUser.email}`,user_id);
        }
      }
      await DATABASE.put(`U_${authUser.user_id}`, JSON.stringify(authUser));
      await DATABASE.put(`U_GH_${providerUser.id}`,user_id);
    }else{
      authUser = JSON.parse(await DATABASE.get(`U_${user_id}`));
    }
    const token = await generateJWT(authUser);
    const now = new Date();
    now.setTime(now.getTime() + TOKEN_EXPIRE_TIME_SEC);
    const code = utils.uuid()
    await DATABASE.put(`U_C_${code}`,token);
    return new Response("",{
      status: 302,
      headers: {
        location: `${FRONTEND_AUTH_CALLBACK_URL}?${queryString.stringify({code,email:authUser.email})}`,
      },
    })
  } catch (e) {
    return new Response("error",{
      status: 302,
      headers: {
        location: `${FRONTEND_AUTH_CALLBACK_URL}?${queryString.stringify({err_msg:"OAuth Login Error"})}`,
      },
    })
  }
}

export async function GoogleRedirect(request:Request){
  //@ts-ignore
  const client_id = global.GOOGLE_CLIENT_ID;
  //@ts-ignore
  const redirect_uri = global.GOOGLE_REDIRECT_PROD_URL;
  const params = queryString.stringify({
    client_id,
    redirect_uri,
    response_type: "code",
    scope: "openid email profile",
    include_granted_scopes: "true",
    state: "pass-through value",
  });
  return Response.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params}`, 302)
}

export async function GoogleCallback(request:Request){

  //@ts-ignore
  const clientId = global.GOOGLE_CLIENT_ID;
  //@ts-ignore
  const redirectUrl = global.GOOGLE_REDIRECT_PROD_URL;
  //@ts-ignore
  const clientSecret = global.GOOGLE_CLIENT_SECRET;

  const options = {
    clientId,
    clientSecret,
    redirectUrl,
  };

  try {
    const { user: providerUser } = await google.users({
      options,
      request,
    });
    let user_id = await DATABASE.get(`U_GO_${providerUser.id}`);
    let authUser:AuthUser;

    await DATABASE.put(`U_GO_U_${providerUser.id}`,JSON.stringify(providerUser));
    if(user_id === null){
      user_id = await DATABASE.get(`U_E_UID_${providerUser.email}`);
      if(user_id){
        authUser = JSON.parse(await DATABASE.get(`U_${user_id}`));
        if(!authUser.google_id){
          authUser.google_id = providerUser.id.toString();
        }
        if(!authUser.name){
          authUser.name = providerUser.name;
        }
      }else{
        user_id = utils.uuid()
        authUser = {
          salt:generateRandomString(6),
          user_id,
          name: providerUser.name,
          avatar: providerUser.picture,
          email: providerUser.email || "",
          google_id: providerUser.id.toString(),
        };
        await DATABASE.put(`U_E_UID_${providerUser.email}`,user_id);
      }
      await DATABASE.put(`U_${authUser.user_id}`, JSON.stringify(authUser));
      await DATABASE.put(`U_GO_${providerUser.id}`,user_id);
    }else{
      authUser = JSON.parse(await DATABASE.get(`U_${user_id}`));
      if(!authUser.name){
        authUser.name = providerUser.name;
        await DATABASE.put(`U_${authUser.user_id}`, JSON.stringify(authUser));
      }
    }
    const token = await generateJWT(authUser);
    const code = utils.uuid()
    await DATABASE.put(`U_C_${code}`,token);
    return new Response("",{
      status: 302,
      headers: {
        location: `${FRONTEND_AUTH_CALLBACK_URL}?${queryString.stringify({code,email:authUser.email})}`,
      },
    })
  } catch (e) {
    return new Response("error",{
      status: 302,
      headers: {
        location: `${FRONTEND_AUTH_CALLBACK_URL}?${queryString.stringify({err_msg:"OAuth Login Error"})}`,
      },
    })
  }
}

export async function Me(request:Request){
  const auth = request.headers.get("Authorization")
  if (!auth) {
    return reply(401, 'Missing "Authorization" header');
  }
  let [scheme, token] = auth!.split(/\s+/g);
  if (!scheme || !token) return reply(400, 'Invalid "Authorization" header');

  if (scheme.toLowerCase() !== 'bearer') {
    return reply(400, 'Invalid "Authorization" scheme');
  }
  try {
    const claims = await jwt.verify(token);
    const user_id = claims.iss;
    const authUser = JSON.parse(await DATABASE.get(`U_${user_id}`));
    let githubUserStr,googleUserStr;
    if(authUser && authUser.google_id){
      googleUserStr = await DATABASE.get(`U_GO_U_${authUser.google_id}`)
    }

    if(authUser && authUser.github_id){
      githubUserStr = await DATABASE.get(`U_GH_U_${authUser.github_id}`)
    }
    const githubUser = authUser?.github_id ? JSON.parse(githubUserStr) : null;
    const googleUser = authUser?.github_id ? JSON.parse(googleUserStr) : null;
    return ResponseJson({
      authUser,claims,githubUser,googleUser
    });
  }catch (e){
    // @ts-ignore
    return reply(500, e?.message);
  }
}

export async function Login(request:Request){
  let input;
  try {
    input = await utils.body<AuthForm>(request);
  } catch (err) {
    return reply(400, 'Error parsing request body');
  }

  const {email,password} = await input
  const user_id = await DATABASE.get(`U_E_UID_${email}`);
  let res:AuthResponse;
  if(user_id ){
    let user = await DATABASE.get(`U_${user_id}`);
    if(user){
      user = JSON.parse(user)
      if(!user.password){
        res = {
          err_msg:"系统错误:Ox02"
        }
      }else if(await SHA1(password+user.salt) === user.password){
        const token = await generateJWT(user);
        res = {
          token,
          user:{
            user_id:user.user_id,
            email:user.user_id,
            name:user.name,
            avatar:user.avatar,
          }
        }
      }else{
        res = {
          err_msg:"用户密码不匹配"
        }
      }

    }else{
      res = {
        err_msg:"系统错误:Ox01"
      }
    }
  }else{
    res = {
      err_msg:"用户不存在"
    }
  }
  return ResponseJson(res);
}

export async function Reg(request:Request){
  let input;
  try {
    input = await utils.body<AuthForm>(request);
  } catch (err) {
    return reply(400, 'Error parsing request body');
  }

  const {email,password} = await input
  let user_id = await DATABASE.get(`U_E_UID_${email}`);
  let res:AuthResponse;
  if(!user_id ){
    user_id = utils.uuid();
    const salt = generateRandomString(6)
    const authUser:AuthUser = {
      password:await SHA1(password+salt),
      salt,
      user_id,
      email,
      name: "",
      avatar: "",
      github_id: "",
    };
    await DATABASE.put(`U_${authUser.user_id}`, JSON.stringify(authUser));
    await DATABASE.put(`U_E_UID_${email}`,user_id);
    const token = await generateJWT(authUser);
    res = {
      token,
      user:{
        user_id:authUser.user_id,
        email:authUser.user_id,
        name:authUser.name,
        avatar:authUser.avatar,
      }
    }
  }else{
    res = {
      err_msg:"用户已存在"
    }
  }
  return ResponseJson(res);
}

export async function Token(request:Request){
  let input;
  try {
    input = await utils.body<AuthTokenForm>(request);
  } catch (err) {
    return ResponseJson({
      err_msg:"Error parsing request body"
    })
  }

  const {code} = await input
  if(!code){
    return ResponseJson({
      err_msg:"Invalid code"
    })
  }
  const token = await DATABASE.get(`U_C_${code}`);
  if(!token){
    return ResponseJson({
      err_msg:"Token is null"
    })
  }
  try {
    const claims = await jwt.verify(token);
    const user_id = claims.iss;
    const authUser = JSON.parse(await DATABASE.get(`U_${user_id}`));
    let res:AuthResponse = {
      token,
      password_empty:!!authUser.password,
      user:{
        user_id:authUser.user_id,
        email:authUser.email,
        name:authUser.name,
        avatar:authUser.avatar,
      }
    }
    return ResponseJson(res);
  }catch (e){
    return ResponseJson({
      err_msg:"Invalid token"
    })
  }
}
