import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  if (request.method !== "POST") {
    return NextResponse.json({ status: 405, error: "Method Not Allowed" });
  }
  const { id, action } = await request.json();

  const body = {
    id: id,
    action: action,
  };

  const cookieStore = await cookies();
  const token = await cookieStore.get("Authorization");

  try {
    const llmRequest = await fetch(`${process.env.NEXT_PUBLIC_DEV_URL}/llm`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token?.value}`,
      },
    });

    const llmResponse = await llmRequest.json();

    return await NextResponse.json(llmResponse, {
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
