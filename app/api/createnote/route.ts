import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export async function POST(req: Request) {
  
  const body = await req.json()
  const savedNote = await prisma.note.create(body);
  console.log(savedNote);

  return new Response(JSON.stringify(savedNote));
}
