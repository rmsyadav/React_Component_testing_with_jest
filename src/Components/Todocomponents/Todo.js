import { useReducer, useState } from "react";
import todosReducer from "../../Reducer/Reducer";
import {addTodoActionCreator,removeTodoActionCreator} from '../../Actions/Actions';
import "../../Stylesheet/Todo.css";
import Footer from "../CommonComponents/Footer";

const Todo = ()=>{
  const date = new Date('December 17, 2023 03:24:00');;
  const todayDate = date.toString();
  const [todoText,setTodoText] = useState("");
  const [todosList,dispatch] = useReducer(todosReducer);
  const [todoWaring,setTodoWaring] = useState(false);

  const AddTodoText = (event)=>{ 
   setTodoText(event.target.value);
  }

  const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(()=>{
            setTodoWaring(false);
            resolve();
        }, milliseconds)
    });
  };

  const addNewTodo = ()=>{
    if(todoText)
    {   setTodoWaring(false);
        dispatch(addTodoActionCreator(todoText));
    }else{
        setTodoWaring(true);
        sleep(2000);
    }
    
  }

  const deleteTodoFromTodoList = (index)=>{
    dispatch(removeTodoActionCreator(index));

  }
   return(
       <>
        <section className="container gradient-form rounded-3" style={{backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}}> 
         <div className="row d-flex justify-content-center align-items-center">
            <div className="col-xl-8" style={{marginTop:"30px"}}>
                <div className="card text-center">
                    <div className="card-header bg-success text-dark fw-bold">
                        Todo App
                    </div>
                    <div className="card-body" style={{minHeight:"400px"}}>
                        {todoWaring && <div className="alert alert-warning card-title" data-testid="todoError">
                        <strong>Warning!</strong> Please type something in TodoBox field.
                        </div>}
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
                                        <span><i className="bi bi-trash hoverEffect" data-testid="deleteTodo" style={{color: "red"}} onClick={()=>{deleteTodoFromTodoList(index)}}></i></span>
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
         </div> 
        </section> 
        <Footer></Footer>
      </>   
   ) 
}

export default Todo;