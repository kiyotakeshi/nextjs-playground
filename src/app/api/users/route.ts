import { NextResponse } from "next/server";
import { User } from "../../types";

export async function GET() {
    const users: User[] = Array.from({ length: 10 }).map((_, i) => {
        const id = i + 1;
        return {
            id: id,
            name: `User ${id}`,
            age: 20 + i,
            location: `City ${id}`,
        };
    });

    return NextResponse.json(users);
}
