
import validate from "../Utility/validateForm";

describe("Action function testing:- ",()=>{

    it('Action Creator function  testing ',()=>{
        expect(validate({email:"rmsyadav567@gmail.com",password:"Rmsyadav@567"})).toEqual({});
    }) 
    it('Action Creator function  testing ',()=>{
        expect(validate({email:"rmsyadav567gm",password:"Rmsyadav@567"})).toEqual({email:"Invalid email address"});
    }) 
    it('Action Creator function  testing ',()=>{
        expect(validate({email:"rmsyadav567@gmail.com"})).toEqual({password:"Required"});
    })
    it('Action Creator function  testing ',()=>{
        expect(validate({password:"Rmsyadav@567"})).toEqual({email:"Required"});
    }) 
  
  })