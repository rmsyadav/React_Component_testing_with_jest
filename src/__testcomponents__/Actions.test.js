
import {addTodoActionCreator,removeTodoActionCreator} from '../Actions/Actions';
describe("Action function testing:- ",()=>{

    it('Action Creator function  testing ',()=>{
        expect(addTodoActionCreator("this is bread")).toEqual({type:"ADD_NEW_TODO",payload:"this is bread"});
    })
    it('Action Creator function  testing ',()=>{
        expect(removeTodoActionCreator(5)).toEqual({type:"REMOVE_EXTING_TODO",payload:5});
    }) 
  
  })