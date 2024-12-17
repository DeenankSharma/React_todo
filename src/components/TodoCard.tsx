import { TodoCardProps } from "../types"

export default function TodoCard(props:TodoCardProps){
  const {todo} = props
  return(<div style={{"margin":"10px"}} className="card todo-item">
    <p style={{"fontSize":"1.3rem"}} >{todo.text}</p>
    <div className="todo-buttons">
      <button style={{"margin":"5px"}} onClick={()=>{props.editTodo(props.todoIndex)}} disabled={todo.completed} >
        <h6>Done</h6>
      </button>
      <button style={{"margin":"5px"}}  onClick={()=>{props.deleteTodo(props.todoIndex)}}  >
        <h6>Delete</h6>
      </button>
    </div>

  </div>)
}