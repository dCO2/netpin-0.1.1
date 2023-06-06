interface Props {
  username: string;
}

export default function DisplayUser({username}: Props){
  return(
    <div className="relative mx-4 mt-3 text-xs md:pt-2 md:m-auto md:max-w-screen-md">
      user <span className="text-red-700">{username}</span> created successfully!
    </div>
  )
}