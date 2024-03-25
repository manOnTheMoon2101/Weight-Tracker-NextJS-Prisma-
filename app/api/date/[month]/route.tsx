import prisma from "@/prisma/prisma";
import { NextResponse } from "next/server";

export const GET = async (
  requests: any,
  { params }: { params: { month: string } }
) => {
  try {
    const { month } = params;

    const data = await prisma.data.findMany({
        where: {
          date: {
            gte: new Date(`2024-0${month}-01T01:00:00.459+00:00`),
            lte: new Date(`2024-0${month}-31T01:00:00.459+00:00`),
          },
        },
      });

      data.map((x: any) => {
        x.date = x.date.toDateString();
      });
  
    if (!data) {
      return NextResponse.json(
        {
          message: "Get not Found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      {
        message: "GET Error",
        err,
      },
      { status: 500 }
    );
  }
};
