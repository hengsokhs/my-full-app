import { NextResponse } from "next/server";

type User = {
    id: number;
    name: string;
    gender: string;
}

export async function GET() {
    const users : User[] = [
        {id: 1, name: "name 1", gender: 'F'},
        {id: 2, name: 'name 2', gender: 'M'},
        {id: 3, name: 'name 3', gender: 'F'}
    ];
    return NextResponse.json(users);
}