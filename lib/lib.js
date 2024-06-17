import { SignJWT } from "jose";
import { cookies } from "next/headers";

export async function login(payload) {
  const response = await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  const key = new TextEncoder().encode("SECRET");

  const session = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);

  const expires = new Date(Date.now() + 3 * 1000);

  cookies().set("session", session, { expires, httpOnly: true });
}

export async function checkSession() {
  return cookies().get("session");
}
