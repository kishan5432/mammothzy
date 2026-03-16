import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Activity from "@/lib/models/Activity";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const activity = await Activity.create(body);
    return NextResponse.json(
      { success: true, data: activity },
      { status: 201 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 400 }
    );
  }
}
