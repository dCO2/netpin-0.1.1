import { PrismaClient } from '@prisma/client';
import Instruction from '@/app/instruction/page';
// import Header from '@/app/header/page';

const prisma = new PrismaClient()

async function getNote(notelink: string) {
  const data = await prisma.note.findUnique({
    where: {link: notelink},
    select: {
      title: true,
      content: true,
    },
  })

  return data;
}

export default async function NotePage({params}: any){
  const savedNote = await getNote(params.link);
  return (
    <>
      <Instruction/>
      <div className="flex flex-col mx-4 mt-4 p-2 text-lg border shadow rounded-md md:mt-4 md:m-auto md:max-w-screen-md">
        <span>{savedNote?.title}</span>
        <p className="break-all text-sm">{savedNote?.content}</p>
      </div>
    </>
  );
}