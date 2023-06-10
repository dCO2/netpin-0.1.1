'use client';
import {Input, Button} from 'antd';
import React, {useState} from 'react';
import { CloudArrowDownIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

const {TextArea} = Input;

interface PageProps {
  params: { 
    toggleSearchEnabled: Dispatch<SetStateAction<boolean>>;
    // setUserID: Dispatch<SetStateAction<number>>;
    userID: number;
    NoteEnabled: boolean;
    userNotes: Array<object>;
    setUserNotes: Dispatch<SetStateAction<Array<object>>>;
    // userData: object;
    // setUserData: Dispatch<SetStateAction<object>>;
  };
}

export default function CreateNote({params}: PageProps){
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const randChar = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let counter = 0;
    while (counter < 6) {
      result += characters.charAt(Math.floor(Math.random() * 62));
      counter += 1;
    }
    return result;
  }

  const handlerOnCreateNote = async () => {
    const response = await fetch('/api/createnote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {data:
          {
            link: randChar(),
            title: title,
            content: content,
            author: {
              connect: {uid: params.userID}
            },
          }}),
    });

    const newNote  = await response.json()
    // console.log(newNote)

    // if(params.userNotes != [{}]){

    // }

    params.setUserNotes([...params.userNotes, newNote]);
  
    params.toggleSearchEnabled(true);
    setTitle('');
    setContent('');
  }


  return(
    <div className="flex flex-col mx-4 mt-4 p-2 text-lg border shadow rounded-md md:mt-4 md:m-auto md:max-w-screen-md">
      <TextArea
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title..."
        bordered={false}
        className="px-0 text-base md:text-lg"
        disabled={params.NoteEnabled}
        autoSize
      />
      <TextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="take a note..."
        bordered={false}
        className="px-0 text-base md:text-sm"
        disabled={params.NoteEnabled}
        autoSize={{ minRows: 5, maxRows: 15 }}
      />
      <Button
        className="p-1 h-10 w-10 self-end"
        type="text"
        disabled={params.NoteEnabled}
        onClick={handlerOnCreateNote}
      >
        <CloudArrowDownIcon className="m-1 h-6 w-6 inline-block"/>
      </Button>
    </div>
  )
}