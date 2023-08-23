import { useReducer, useState } from "react";
import todosReducer from "../../Reducer";
import "../../Stylesheet/Todo.css"
const Todo = ()=>{
  const date = new Date('December 17, 2023 03:24:00');;
  const todayDate = date.toString();
  const [todoText,setTodoText] = useState([]);
  const [todosList,dispatch] = useReducer(todosReducer);

  const AddTodoText = (event)=>{
   setTodoText(event.target.value);
  }

  const addNewTodo = ()=>{
    dispatch({type:"ADD_NEW_TODO",payload:todoText});
  }
   return(
        <>
          <div className="container" style={{marginTop:"30px"}}>
            <div className="card text-center">
                <div className="card-header bg-success text-dark fw-bold">
                    Todo App
                </div>
                <div className="card-body" style={{height:"400px"}}>
                    <div className="input-group card-title mb-3">
                        <input type="text" className="form-control" placeholder="Add your new todo" value={todoText} onChange={AddTodoText}/>
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addNewTodo}><i className="bi bi-plus-circle-fill" style={{color: "blue"}}></i></button>
                    </div>
                    <div className="card-text">
                    <ul className="list-group list-group-numbered">
                        {todosList && todosList.map((value,index)=>{
                            return(
                                <li key={index} data-testid="list-group-item" className="list-group-item d-flex justify-content-between align-items-center">
                                    {value}
                                    <span><i className="bi bi-trash" style={{color: "red"}}></i></span>
                                </li>
                                )
                        })}
                    </ul>
                    </div>    
                </div>
                <div className="card-footer text-light bg-warning">
                    {todayDate}
                </div>
           </div>
        </div>  
        </>
   ) 
}

export default Todo;