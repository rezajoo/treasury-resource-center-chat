import { NextResponse } from "next/server";

export const runtime = "nodejs";

const DEMO_PASSWORD = process.env.DEMO_ACCESS_PASSWORD || "Truist2026";

export async function POST(request: Request) {
  let body: { password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const password = typeof body.password === "string" ? body.password : "";
  if (!password) {
    return NextResponse.json(
      { ok: false, error: "Enter a password." },
      { status: 400 },
    );
  }

  if (password !== DEMO_PASSWORD) {
    return NextResponse.json(
      { ok: false, error: "Incorrect password." },
      { status: 401 },
    );
  }

  return NextResponse.json({ ok: true });
}
