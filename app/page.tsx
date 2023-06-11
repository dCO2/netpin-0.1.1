'use client';
import React, {useState} from 'react';
import Header from "./header/page"
import Instruction from "./instruction/page"
import CreateUser from "./createuser/page"
import CreateNote from "./createnote/page"
import DisplayUser from './displayuser/page';
import Usernotes from './usernotes/page';

export default function Home() {
  const [InstructnEnabled, setInstructnEnabled] = useState(true);
  const [NoteEnabled, setNoteEnabled] = useState(true);
  const [SearchEnabled, toggleSearchEnabled] = useState(false);
  const [username, setUsername] = useState("");
  const [userID, setUserID] = useState(0);
  const [userNotes, setUserNotes] = useState([{}]);

  return (
    <div>
      <Header
        params={{setInstructnEnabled: setInstructnEnabled,
                SearchEnabled: SearchEnabled}}
      />
      {InstructnEnabled && <Instruction />}
      
      {NoteEnabled &&
      <CreateUser params={{setNoteEnabled: setNoteEnabled,
                          setUsername: setUsername,
                          setUserID: setUserID,
                          username: username,
                          userNotes: userNotes,
                          setUserNotes: setUserNotes}}
      />}

      {(!NoteEnabled) &&
      <DisplayUser params={{username}}
      />}
      
      <CreateNote
        params={{toggleSearchEnabled: toggleSearchEnabled,
                NoteEnabled: NoteEnabled,
                userNotes: userNotes,
                setUserNotes: setUserNotes,
                userID: userID,}}
      />

      <Usernotes params={{userNotes: userNotes}}
      />
    </div>
  )
}
