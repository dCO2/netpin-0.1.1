'use client';
import React, {useState} from 'react';
import Header from "./header/page"
import Instruction from "./instruction/page"
import CreateUser from "./createuser/page"
import CreateNote from "./createnote/page"
import DisplayUser from './displayuser/page';

export default function Home() {
  const [InstructnEnabled, setInstructnEnabled] = useState(true);
  const [NoteEnabled, setNoteEnabled] = useState(true);
  // const [content, setContent] = useState('');
  const [username, setUsername] = useState("");

  return (
    <div>
      <Header setInstructnEnabled={setInstructnEnabled} />
      {InstructnEnabled && <Instruction />}
      {NoteEnabled && <CreateUser username={username} setNoteEnabled={setNoteEnabled} setUsername={setUsername}/>}
      {(!NoteEnabled) && <DisplayUser username={username} />}
      <CreateNote NoteEnabled={NoteEnabled} />
    </div>

    // <ListOfNotes/>
  )
}
