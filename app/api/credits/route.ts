import { NextRequest, NextResponse } from "next/server";
import { userSession } from "@/utils/serverMidleware";
import { prisma } from "@/utils/prismaClient";
export const PATCH = async (req: NextRequest,res: NextResponse) => {
  const session: {user: {id: string, email: string, name: string, image: string, credits: number, expires: Date}} = await userSession(req,res);
  const { credits } = await req.json();
  if (session) {
    await prisma.user.update(
    {
      data: { 
        credits: {
          decrement: credits
        }
      },
      where: {
        id: session.user.id,
      },
    })
  } else {
    console.log("NOT ABLE TO GENERATE");
  }
  return new Response("ok", { status: 200 });
}