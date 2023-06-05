import Header from "./header/page"
import Instruction from "./instruction/page"
import CreateUser from "./createuser/page"
import CreateNote from "./createnote/page"

export default function Home() {
  return (
    <div>
      <Header/>
      <Instruction/>
      <CreateUser/>
      <CreateNote/>
    </div>

    // <ListOfNotes/>
  )
}
