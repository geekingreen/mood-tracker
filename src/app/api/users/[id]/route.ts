import { PrismaClient, Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse<any>> {
  const { id } = await params;
  try {
    const user = await prisma.user.findFirst({
      select: {
        id: true,
        email: true,
      },
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error }, { status: 404 });
  }
}
