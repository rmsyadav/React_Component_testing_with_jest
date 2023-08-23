import todosReducer from "../Reducer/Reducer";

describe("Reducer function testing:- ",()=>{

    it('Reducer function  testing at given payload as something else',()=>{


        expect(todosReducer([],{type:"SOMETHING_ELSE"})).toHaveLength(0);
    })
    it('Reducer function  testing at add new todo ',()=>{

        expect(todosReducer([],{type:"ADD_NEW_TODO",payload:"ADD new todo test"})).toHaveLength(1);
    
    })
    it('Reducer function  testing  adding new todo in existing todo',()=>{

      expect(todosReducer(["Hi Ramashankar kumar"],{type:"ADD_NEW_TODO",payload:"ADD new todo test"})).toContain('ADD new todo test');
    
    })
    it('Reducer function  testing while deleting todo from existing todoList',()=>{

      expect(todosReducer(["Hi Ramashankar kumar"],{type:"REMOVE_EXTING_TODO",payload:0})).toHaveLength(0);
    
    })
  })