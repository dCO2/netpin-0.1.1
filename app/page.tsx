'use client';
import React, {useState} from 'react';
import Header from "./header/page"
import Instruction from "./instruction/page"
import CreateUser from "./createuser/page"
import CreateNote from "./createnote/page"

export default function Home() {
  const [InstructnEnabled, setInstructnEnabled] = useState(true);
  const [content, setContent] = useState('');
  return (
    <div>
      <Header
        setInstructnEnabled={setInstructnEnabled}
        />
      {InstructnEnabled && <Instruction />}
      <CreateUser/>
      <CreateNote/>
    </div>

    // <ListOfNotes/>
  )
}
