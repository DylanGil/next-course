import { NextResponse } from "next/server";

export async function GET(req, res) {
  return NextResponse.json({ message: "Hello from the user API route!" });
}

export async function POST(req, res) {
  return NextResponse.json({ message: "Hello from the user API route!" });
}
