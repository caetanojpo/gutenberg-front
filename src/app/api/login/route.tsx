import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  if (request.method !== "POST") {
    return NextResponse.json({ status: 405, error: "Method Not Allowed" });
  }
  const { email, password } = await request.json();

  const body = {
    email: email,
    password: password,
  };
  console.log(body);
  console.log(`${process.env.NEXT_PUBLIC_DEV_URL}/auth/login`);
  try {
    const loginRequest = await fetch(
      `${process.env.NEXT_PUBLIC_DEV_URL}/auth/login`,
      {
        body: JSON.stringify(body),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const createResponse = await loginRequest.json();
    const statusCode = createResponse.statusCode
      ? createResponse.statusCode
      : 200;

    const status = [200, 201];

    const returnResponse = { statusCode, ...createResponse };
    if (!status.includes(returnResponse.statusCode)) {
      return await NextResponse.json(returnResponse, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
    }

    const cookieStore = await cookies();
    const maxAge = 3 * 24 * 60 * 60;

    const loginData = createResponse;
    console.log(JSON.stringify(loginData));
    await cookieStore.set("Authorization", loginData.data, {
      secure: true,
      maxAge: maxAge,
    });
    const token = await cookieStore.get("Authorization");

    const userRequest = await fetch(
      `${process.env.NEXT_PUBLIC_DEV_URL}/users/email/${email}`,
      {
        headers: {
          Authorization: `Bearer ${token?.value}`,
        },
      }
    );
    const userResponse = await userRequest.json();

    console.log(JSON.stringify(userResponse.data));
    loginData.statusCode = returnResponse.statusCode;
    await cookieStore.set("user", JSON.stringify(userResponse.data), {
      secure: true,
      maxAge: maxAge,
    });
    return await NextResponse.json(userResponse, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.next();
  }
}
