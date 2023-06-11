import Link from "next/link";

interface PageProps {
  params: { 
    userNotes: Array<object>;
   };
}

export default function Usernotes({params}: PageProps){
  return(
    <div className="flex flex-col mx-4 mt-4 p-2 rounded-md md:mt-4 md:m-auto md:max-w-screen-md">
      {params.userNotes?.reverse().map((note: any)=>{
            if(note.nid){
              return(
                <div className="flex border text-sm p-2 mb-1 rounded-md" key={note.link}>
                  <Link href={`/note/${note.link}`}>
                    <span id={note.title} className="break-all">{note.title}</span>
                    <p id={note.link+note.title} className="text-xs break-all">{note.content}</p>
                  </Link>
                </div>
              )
            }

      })}
    </div>
  );
}