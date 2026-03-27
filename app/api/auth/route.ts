import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const data = await request.json();

    console.log("Data received: ", data);

    return NextResponse.json({message: "Data saved successfully!"}, {status: 200});
}

export async function GET() {
    return Response.json([
        { id: 1, name: 'John' },
        { id: 2, name: 'Sara' }
    ])
}