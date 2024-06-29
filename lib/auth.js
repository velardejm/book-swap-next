"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(payload) {
  const key = new TextEncoder().encode("SECRET");
  const session = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("300 sec from now")
    .sign(key);
  const expires = new Date(Date.now() + 300 * 1000);
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


// export async function getSessionData() {
//   // const encryptedSessionData = cookies().get('session').value;
//   // console.log(encryptedSessionData);
//   // return encryptedSessionData;
//   // console.log(encryptedSessionData);
//   // return encryptedSessionData ? JSON.parse(decrypt(encryptedSessionData)) : null
// }

