import { TodoListProps } from "../types"
import TodoCard from "./TodoCard"



export function TodoList(props:TodoListProps){
  const tab = props.selected
  const filterTodoList = tab === "All" ? props.todos : tab === 'Completed' ? props.todos.filter(val=>val.completed):props.todos.filter(val=>!val.completed)

  return(<>
    {filterTodoList.map((todo,todoIndex)=>{
      return(
        <TodoCard editTodo={props.editTodo} todoIndex={props.todos.findIndex(val=>{val.text === todo.text})} deleteTodo={props.deleteTodo} key={todoIndex} todo={todo} />
      )
    })}
    
  </>)
}