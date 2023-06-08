interface PageProps {
  params: { 
    username: string;
   };
}

export default function DisplayUser({params}: PageProps){
  return(
    <div className="relative mx-4 mt-3 text-xs md:pt-2 md:m-auto md:max-w-screen-md">
      user &quot;<span className="text-red-700">{params.username}</span>&quot; created successfully!
    </div>
  )
}