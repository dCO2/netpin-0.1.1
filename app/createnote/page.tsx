'use client';
import {Input, Button} from 'antd';
import React, {useState} from 'react';
import { CloudArrowDownIcon } from "@heroicons/react/24/outline";

const {TextArea} = Input;

export default function CreateNote(){
  const [value, setValue] = useState('');
  const [username, setUsername] = useState('');
  return(
    <div className="flex flex-col mx-4 mt-4 p-2 text-lg border shadow rounded-md md:mt-4 md:m-auto md:max-w-screen-md">
      <TextArea
        placeholder="title..."
        bordered={false}
        className="px-0 text-base md:text-lg"
        autoSize
      />
      <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="take a note..."
        bordered={false}
        className="px-0 text-base md:text-lg"
        autoSize={{ minRows: 5, maxRows: 15 }}
      />
      <Button
        className="p-1 h-10 w-10 self-end"
        type="text"
      >
        <CloudArrowDownIcon className="m-1 h-6 w-6 inline-block"/>
      </Button>
    </div>
  )
}