import { NextResponse } from "next/server";



export async function GET(request) {
  try {
    
      const text={text:"webHook"}
      return NextResponse.json(text);
    
  } catch (error) {
    const text2={error:error.message}
    return NextResponse.json(text2);
    
  }};