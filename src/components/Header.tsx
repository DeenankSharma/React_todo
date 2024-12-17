import "../fanta.css"
import { ToDO } from "../types"

export function Header(props:{todos:ToDO[]}){
  const {todos} = props
  const isTasksPlural = (todos.length != 0)

  return(<>
    <header style={{"margin":"5px"}}><h1 className="text-gradient">You have {todos.length} Open {isTasksPlural?<>Tasks</>:<>Task</>}</h1></header>
  </>)
}