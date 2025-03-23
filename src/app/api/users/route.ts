import { PrismaClient, Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request): Promise<NextResponse<any>> {
  try {
    const user = await prisma.user.create({
      data: (await req.json()) as Prisma.UserCreateInput,
    });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error }, { status: 412 });
  }
}
