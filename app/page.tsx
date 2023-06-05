import Header from "./header/page"
import Instruction from "./instruction/page"
import CreateUser from "./createuser/page"

export default function Home() {
  return (
    <div>
      <Header/>
      <Instruction/>
      <CreateUser/>
    </div>

    // <CreateNote/>
    // <ListOfNotes/>
  )
}
