"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export async function login(payload) {
  const key = new TextEncoder().encode("SECRET");
  const session = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1800 sec from now")
    .sign(key);
  const expires = new Date(Date.now() + 1800 * 1000);
  cookies().set("session", session, { expires, httpOnly: true });
}

export async function logout() {
  cookies().set("session", "", { expires: new Date(0) });
  redirect("/");
}

export async function checkSession() {
  const session = cookies().get("session");

  return session ? true : false;

  // const key = new TextEncoder().encode("SECRET");
  // const { payload } = await jwtVerify(session.value, key);
}

export async function authenticate() {
  try {
    const authorization = headers().get("authorization");
    if (!authorization) {
      throw new Error("No authorization token found.");
    }
    const token = authorization && authorization.split(" ")[1];
    const key = new TextEncoder().encode("SECRET");
    const { payload } = await jwtVerify(token, key);
    return {
      success: true,
      data: payload,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

// export async function getSessionData() {
//   // const encryptedSessionData = cookies().get('session').value;
//   // console.log(encryptedSessionData);
//   // return encryptedSessionData;
//   // console.log(encryptedSessionData);
//   // return encryptedSessionData ? JSON.parse(decrypt(encryptedSessionData)) : null
// }
