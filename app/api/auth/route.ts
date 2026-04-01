import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { username } = await req.json();

    const res = NextResponse.json({ success: true });

    res.cookies.set("username", username, {
        httpOnly: true,
        path: "/",
    });

    return res;
}