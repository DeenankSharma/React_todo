export type ToDO = {
  text:string;
  completed:boolean;
}

export type TodoInputProps = {
  addTodo : (newTodo:ToDO)=>void
}

export type TodoCardProps = {
  todo:{
    text : string;
    completed : boolean;
  }
  todoIndex:any;
  deleteTodo:(index:any)=>void;
  editTodo:(index:any)=>void;
}

export type TabsProps = {
  todos:ToDO[]
  selected:string;
  setSelectedTab : (value:string)=>void
}

export type TodoListProps =  {
  todos : {
    text : string;
    completed : boolean;
  }[];
  selected:string;
  deleteTodo:(index:any)=>void;
  editTodo:(index:any)=>void;
}