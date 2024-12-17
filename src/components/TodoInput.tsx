import { useState } from "react"
import {TodoInputProps} from "../types"


export function TodoInput(props:TodoInputProps){
  
  const [input,setInput] = useState<string>('')

  return (
    <div style={{"margin":"5px"}} className="input-container" >
      <input style={{"margin":"5px"}} value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" placeholder="Add Task"/>
      <button  style={{"margin":"5px"}} onClick={()=>{
        if(input!=''){
          props.addTodo({"text":input,"completed":false})
          setInput('')
        }
      }} >
      <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  )
}