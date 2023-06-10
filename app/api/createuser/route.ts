import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export async function POST(req: Request) {
  
  const body = await req.json()
  const savedUser = await prisma.user.create(body);

  return new Response(JSON.stringify(savedUser));
  ;
}
