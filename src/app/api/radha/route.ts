import { NextResponse } from "next/server";

export const runtime = "edge";

const handler = async () => {
    return NextResponse.json(
        { status: "OK", message: "Radha Radha" },
        { status: 200 }
    );
};

export {
    handler as GET,
    handler as POST,
    handler as PUT,
    handler as PATCH,
    handler as DELETE,
};
