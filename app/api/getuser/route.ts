import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export async function POST(req: Request) {
  
  const body = await req.json()
  const savedUser = await prisma.user.findUnique({
    where: {name: body.data.name},
    select: {
      uid: true,
      name: true,
      notes: true,
    },
  });

  return new Response(JSON.stringify(savedUser));
}
