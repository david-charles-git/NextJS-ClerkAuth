import { NextRequest, NextResponse } from "next/server";

const DATA_SOURCE_URL : string = "http://localhost:8080/wp-json/wp/v2/tests";

const GET : (request : NextRequest) => Promise<NextResponse> = async (request) => {
    const res = await fetch(DATA_SOURCE_URL);

    const result = await res.json();

    return NextResponse.json(result);
};
  
export { GET };