import { useReducer, useState } from "react";
import todosReducer from "../../Reducer";
import "../../Stylesheet/Todo.css"
const Todo = ()=>{
  const date = new Date('December 17, 2023 03:24:00');;
  const todayDate = date.toString();
  const [todoText,setTodoText] = useState();
  const [todosList,dispatch] = useReducer(todosReducer);

  const AddTodoText = (event)=>{
   setTodoText(event.target.value);
  }

  const addNewTodo = ()=>{
    dispatch({type:"ADD_NEW_TODO",payload:todoText});
  }
   return(
        <>
          <div class="container">
            <div class="card text-center">
                <div class="card-header">
                    Todo App
                </div>
                <div class="card-body">
                    <div class="input-group card-title mb-3">
                        <input type="text" class="form-control" placeholder="Add your new todo" value={todoText} onChange={AddTodoText}/>
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addNewTodo}><i class="bi bi-plus-circle-fill" style={{color: "blue"}}></i></button>
                    </div>
                    <div class="card-text">
                    <ul class="list-group list-group-numbered">
                        {todosList && todosList.map((value,index)=>{
                            return(
                                <li data-testid="list-group-item" class="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                    {value}
                                    <span><i class="bi bi-trash" style={{color: "red"}} key={index}></i></span>
                                </li>
                                )
                        })}
                    </ul>
                    </div>    
                </div>
                <div class="card-footer text-muted">
                    {todayDate}
                </div>
           </div>
        </div>  
        </>
   ) 
}

export default Todo;