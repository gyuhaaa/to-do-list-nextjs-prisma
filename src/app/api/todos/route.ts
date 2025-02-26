import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  try {
    // 사용자 요청으로부터 유저 id 값 가져옴
    const userId = Number(searchParams.get("user-id"));

    // 유저 id가 숫자인지, 존재하는지
    if (isNaN(userId) || userId === 0) {
      throw new Error("유저 ID가 잘못되었습니다.");
    }

    // 유저가 존재하는지
    const existUser = await prisma.user.findUnique({ where: { id: userId } });
    if (!existUser) {
      throw new Error("존재하지 않는 유저");
    }

    // 조회
    const todos = await prisma.todo.findMany({
      where: {
        userId: userId,
      },
    });

    return NextResponse.json({ success: true, data: todos });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || "할 일 조회 실패",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const { content, userId } = await request.json();

  try {
    const todo = await prisma.todo.create({
      data: {
        content,
        userId,
      },
    });

    return NextResponse.json({ success: true, data: todo });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "할 일 추가 실패",
      },
      { status: 500 }
    );
  }
}
