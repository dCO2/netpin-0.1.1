'use client'; 

export default function CreateUser(){
  return(
    <form className="relative mt-4 mx-6 md:mt-14 md:m-auto md:max-w-screen-sm">
      <input
        className="w-full border rounded-md px-3 py-2.5 pr-16 text-sm ring-blue-400 focus:outline-none focus:ring-1"
        type="text"
        placeholder="choose username by typing here..."
      />
      <button
        type="submit"
        className="group absolute rounded-r-md inset-y-0 right-0 flex w-14 items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 stroke-slate-700 group-hover:stroke-slate-1000"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </form>
  )
}