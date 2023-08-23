

const todosReducer = (state=[],action)=>{
    switch (action.type) {
        case "ADD_NEW_TODO":
           return  [...state,action.payload];
        case "REMOVE_EXTING_TODO":
            let TodoList = [...state];
            TodoList.splice(action.payload,1);
            return TodoList;    
        default:
          return state;
      }
    
}

export default todosReducer;