

const todosReducer = (state=[],action)=>{
    switch (action.type) {
        case "ADD_NEW_TODO":
           return  [...state,action.payload];
        default:
          return state;
      }
    
}

export default todosReducer;