

export const addTodoActionCreator = (payload)=>{
    const addTodoActionObj ={
        type:"ADD_NEW_TODO",
        payload:payload,
     } 
   return addTodoActionObj;
}
export const removeTodoActionCreator = (payload)=>{
    const removeTodoActionObj ={
        type:"REMOVE_EXTING_TODO",
        payload:payload,
     } 
   return removeTodoActionObj;
}