import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  if (request.method !== "POST") {
    return NextResponse.json({ status: 405, error: "Method Not Allowed" });
  }
  const { id } = await request.json();

  const cookieStore = await cookies();
  const token = await cookieStore.get("Authorization");

  console.log(`${process.env.NEXT_PUBLIC_DEV_URL}/gutenberg/${id}`);
  try {
    const gutenbergRequest = await fetch(
      `${process.env.NEXT_PUBLIC_DEV_URL}/gutenberg/${id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token?.value}`,
        },
      }
    );

    const gutenbergResponse = await gutenbergRequest.json();

    console.log(JSON.stringify(gutenbergResponse));
    const statusCode = gutenbergRequest.status;
    console.log("real status: " + statusCode);

    const status = [200, 201];

    const returnResponse = { statusCode, ...gutenbergResponse };
    console.log(returnResponse.statusCode);

    if (
      !gutenbergResponse.message.includes(
        "Book is already saved on the database"
      )
    ) {
      if (!status.includes(returnResponse.statusCode)) {
        return await NextResponse.json(returnResponse, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
        });
      }
    }

    const bookRequest = await fetch(
      `${process.env.NEXT_PUBLIC_DEV_URL}/books/gutenberg/${id}`,
      {
        headers: {
          method: "GET",
          Authorization: `Bearer ${token?.value}`,
        },
      }
    );
    const bookResponse = await bookRequest.json();

    console.log(JSON.stringify(bookResponse));

    return await NextResponse.json(bookResponse, {
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
