
import validate from "../Utility/validateRegistrationForm";

describe("Action function testing:- ",()=>{

    it('Validation for when filled all input textbox =>',()=>{
        expect(validate({name:"Ramshankar kumar",email:"rmsyadav567@gmail.com",password:"Rmsyadav@567",gender:"Male",telphone:"8839847229",birthdayDate:"10/12/1998",rePassword:"Rmsyadav@567"})).toEqual({});
    })
    it('Validation for when not filled any input textbox =>',()=>{
        expect(validate({})).toEqual({name:"Required",email:"Required",password:"Required",gender:"Please select your gender!",telphone:"phone number is required!",birthdayDate:"Date of birth  is required!",rePassword:"Required"});
    }) 
    it('Validation for name field when leave it  as empty =>',()=>{
        expect(validate({email:"rmsyadav567@gmail.com",password:"Rmsyadav@567",gender:"Male",telphone:"8839847229",birthdayDate:"10/12/1998",rePassword:"Rmsyadav@567"})).toEqual({name:"Required"});
    })
    it('Validation for name field when number of letter more than 25 charachter =>',()=>{
        expect(validate({name:"Ramshankar kumar yadav ji hello",email:"rmsyadav567@gmail.com",password:"Rmsyadav@567",gender:"Male",telphone:"8839847229",birthdayDate:"10/12/1998",rePassword:"Rmsyadav@567"})).toEqual({name:'Must be 25 characters or less'});
    })
    it('Validation for password field when leave it  as empty =>',()=>{
        expect(validate({name:"Ramashankar kumar",email:"rmsyadav567@gmail.com",gender:"Male",telphone:"8839847229",birthdayDate:"10/12/1998",rePassword:""})).toEqual({password:"Required",rePassword:"Required"});
    })
    it('Validation for password field when number of letter less than 8 charachter =>',()=>{
        expect(validate({name:"Ramshankar kumar",email:"rmsyadav567@gmail.com",password:"Rmsyad",gender:"Male",telphone:"8839847229",birthdayDate:"10/12/1998",rePassword:"Rmsyad"})).toEqual({password:'Must be 8 characters or greter'});
    })
    it('Validation for email field when leave it as empty =>',()=>{
        expect(validate({name:"Ramshankar kumar",password:"Rmsyadav@567",gender:"Male",telphone:"8839847229",birthdayDate:"10/12/1998",rePassword:"Rmsyadav@567"})).toEqual({email:"Required"});
    }) 
    it('Validation for email field when type the wrong emailId =>',()=>{
        expect(validate({name:"Ramshankar kumar",email:"rmsyadav56mail",password:"Rmsyadav@567",gender:"Male",telphone:"8839847229",birthdayDate:"10/12/1998",rePassword:"Rmsyadav@567"})).toEqual({email:'Invalid email address'});
    }) 
    it('Validation for phone field when leave it as empty =>',()=>{
        expect(validate({name:"Ramshankar kumar",email:"rmsyadav567@gmail.com",password:"Rmsyadav@567",gender:"Male",birthdayDate:"10/12/1998",rePassword:"Rmsyadav@567"})).toEqual({telphone:"phone number is required!"});
    })
    it('Validation for phone field when enter the phone number more than or less then 10 digit =>',()=>{
        expect(validate({name:"Ramshankar kumar",email:"rmsyadav567@gmail.com",password:"Rmsyadav@567",gender:"Male",telphone:"39847229",birthdayDate:"10/12/1998",rePassword:"Rmsyadav@567"})).toEqual({telphone:'must be enter correct phone number'});
    }) 
    it('Validation for birthDate field leave it as empty =>',()=>{
        expect(validate({name:"Ramshankar kumar",email:"rmsyadav567@gmail.com",password:"Rmsyadav@567",gender:"Male",telphone:"8839847229",rePassword:"Rmsyadav@567"})).toEqual({birthdayDate:"Date of birth  is required!"});
    })
    it('Validation for gender field leave it as empty =>',()=>{
        expect(validate({name:"Ramshankar kumar",email:"rmsyadav567@gmail.com",password:"Rmsyadav@567",telphone:"8839847229",birthdayDate:"10/12/1998",rePassword:"Rmsyadav@567"})).toEqual({gender:"Please select your gender!"});
    }) 
    it('Validation for Repassword field when leave it  as empty ',()=>{
        expect(validate({name:"Ramshankar kumar",email:"rmsyadav567@gmail.com",password:"Rmsyadav@567",gender:"Male",telphone:"8839847229",birthdayDate:"10/12/1998"})).toEqual({rePassword:"Required"});
    })
    it('Validation for Repassword field when reTypePassword is matched with actual password=> ',()=>{
        expect(validate({name:"Ramshankar kumar",email:"rmsyadav567@gmail.com",password:"Rmsyadav@567",gender:"Male",telphone:"8839847229",birthdayDate:"10/12/1998",rePassword:"Rmsyada567645"})).toEqual({rePassword:"Must be match with your password field"});
    }) 
  
  })