import todosReducer from "../Reducer";

describe("Action function testing:- ",()=>{

    it('Reducer function  testing ',()=>{


        expect(todosReducer([],{type:"SOMETHING_ELSE"})).toHaveLength(0);
    })
    it('Reducer function  testing ',()=>{

        expect(todosReducer([],{type:"ADD_NEW_TODO",payload:"ADD new todo test"})).toHaveLength(1);
    
    })
    it('Reducer function  testing ',()=>{

      expect(todosReducer(["Hi Ramashankar kumar"],{type:"ADD_NEW_TODO",payload:"ADD new todo test"})).toContain('ADD new todo test');
    
    })
  })