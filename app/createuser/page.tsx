'use client'; 
import {Button, Checkbox} from 'antd';
import { Dispatch, SetStateAction, useState } from "react";

interface PageProps {
  params: { 
    setNoteEnabled: Dispatch<SetStateAction<boolean>>;
    setUsername: Dispatch<SetStateAction<string>>;
    setUserID: Dispatch<SetStateAction<number>>;
    username: string;
    userNotes: Array<object>;
    setUserNotes: Dispatch<SetStateAction<Array<object>>>;
   };
}

export default function CreateUser({params}: PageProps){
  const [submitDisabled, toggleDisableSubmit] = useState(true);
  const [checkedFirstUser, toggleFirstUser] = useState(false);
  const [checkedExistingUser, toggleExistingUser] = useState(false);
  const [error, setError] = useState(false);

  const handlerOnCreateUser = async () => {

    if(checkedFirstUser === true){
      const response = await fetch('/.netlify/functions/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({data:{name: params.username}}),
      });

      const uData = await response.json()
      params.setUserID(uData.uid);
    
      params.setNoteEnabled((c) => !c);
    }else if(checkedExistingUser === true){
      const response = await fetch('/.netlify/functions/getuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({data:{name: params.username}}),
      });

      const uData = await response.json()

      if(uData === null){
        setError(true);
      }else{
        params.setUserID(uData.uid);
        params.setUserNotes(uData.notes);
        params.setNoteEnabled((c) => !c);
      }
    }
  }

  return(
    <>
    <div className="relative mt-4 mx-4 md:mt-9 md:m-auto md:max-w-screen-sm">
      <input
        className="w-full border rounded-md px-3 py-2.5 pr-16 text-sm ring-blue-400 focus:outline-none focus:ring-1"
        type="text"
        placeholder="login or choose a username..."
        value={params.username}
        onChange={(e) => { params.setUsername(e.target.value);
                            if((checkedFirstUser !== checkedExistingUser)&&
                                (params.username !== ""))
                              {toggleDisableSubmit(false)}
                            }}
      />
      <Button
        className="group absolute rounded-r-md inset-y-0 right-0 flex w-14 h-full items-center justify-center"
        type="text"
        onClick={ handlerOnCreateUser }
        disabled={submitDisabled}
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
      </Button>
    </div>
    <div className="mx-4 md:m-auto md:max-w-screen-sm">
      <Checkbox
        className="text-zinc-400"
        checked={checkedFirstUser}
        onChange={ () => { toggleFirstUser((c) => !c);
                            if(params.username === "")
                              {toggleDisableSubmit(true)}
                            else
                              {toggleDisableSubmit((c) => !c);}
                            }}
      >
        first time user
      </Checkbox>

      <Checkbox
        className="text-zinc-400"
        checked={checkedExistingUser}
        onChange={ () => { toggleExistingUser((c) => !c);
                            if(params.username === "")
                              {toggleDisableSubmit(true)}
                            else
                              {toggleDisableSubmit((c) => !c);}
                          }}
      >
        existing user
      </Checkbox>
      {error && <span className="text-red-400 text-sm">(user not found)</span>}
    </div>
    </>
  )
}