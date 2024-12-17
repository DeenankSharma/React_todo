import { useState , useEffect } from "react";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoList } from "./components/TodoList";
import { ToDO } from "./types";
// import { todos } from "./constants";
import { TodoInput } from "./components/TodoInput";

function App(){
  const [todos_,setTodos] = useState<ToDO[]>([])
  const [selectiveTab,setSelectiveTab] = useState<string>('Open')

  function addTodo(newTodo:ToDO){
    const newTodoList = [...todos_,newTodo]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function editTodo(index:any){
    let newTodoList = [...todos_]
    let completeTodo = todos_[index]
    completeTodo['completed'] = true
    newTodoList[index] = completeTodo
    setTodos(newTodoList) 
    handleSaveData(newTodoList)
  }

  function deleteTodo(index:any){
    let newTodoList = todos_.filter((valIndex)=>{
      return valIndex !== index
    })
    setTodos(newTodoList)
  }

  function handleSaveData(currentTodos:ToDO[]){
    localStorage.setItem('todo-app',JSON.stringify({todos:currentTodos}))
  }

  useEffect(()=>{
    if(!localStorage || !localStorage.getItem('todo-app')){return}
    let db = []
    if(localStorage.getItem('todo-app')){
      db = JSON.parse(localStorage.getItem('todo-app') as string)
      setTodos(db.todos)
    }
  },[])


  return(<>
    <Header todos = {todos_} />
    <Tabs todos={todos_} selected={selectiveTab} setSelectedTab={setSelectiveTab} />
    <TodoList editTodo={editTodo} deleteTodo = {deleteTodo} selected={selectiveTab} todos={todos_} />
    <TodoInput addTodo={addTodo} />
  </>)
}

export default App