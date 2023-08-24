import { rest } from 'msw';
import renderer from 'react-test-renderer';
import { render,screen,act } from '@testing-library/react';
import { setupServer } from 'msw/node';
import Signup from '../Components/Signup';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'

const mockTasks ={statusCode:200,statusMessage:"success!"}
const mockTasks2 ={statusCode:403,statusMessage:"error!"}

const getTasksPath ='/shopping/api/v1/register';

const formHandler = rest.post(getTasksPath, async (req, res, ctx) =>{
  const  body = await req.json();
  const {email,password} = await body;
  if(email === "rmsyadav678@gmail.com")
  {
    return  res(ctx.json(mockTasks2)) 
  }
  else{
    return  res(ctx.json(mockTasks)) ;
  }  
 }  
);

const mswServer = setupServer(formHandler);



describe('SignUp component testing', () => {

   beforeAll(() => mswServer.listen());
   afterEach(() => mswServer.resetHandlers());
   afterAll(() => mswServer.close());
   
   it('SignUp component snapshot testing ',()=>{

     const signup = renderer.create(<BrowserRouter><Signup></Signup></BrowserRouter>).toJSON();
     expect(signup).toMatchSnapshot();
   })

   it('succesfully registered to my website!', async () => {
    const user = userEvent.setup();
     render(<BrowserRouter><Signup></Signup></BrowserRouter>);

     //**********************name******************
     const nameTextBoxElement = screen.getByTestId("name");
     await act(async()=>{
      await user.type(nameTextBoxElement,'Ramashankar kumar');
     }) 
     expect(screen.getByTestId('name')).toHaveValue('Ramashankar kumar');

     //******************email**************************
     const textBoxElement = screen.getByTestId("email");
     await act(async()=>{
      await user.type(textBoxElement,'rmsyadav567@gmail.com');
     }) 
     expect(screen.getByTestId('email')).toHaveValue('rmsyadav567@gmail.com');

     //*******************Password ****************
     const passwordElement = screen.getByTestId("password");
     await act(async()=>{
      await user.type(passwordElement,'rmsyadav@567');
     })
     expect(screen.getByTestId('password')).toHaveValue('rmsyadav@567');

     //*******************rePassword****************************

     const rePasswordElement = screen.getByTestId("rePassword");
     await act(async()=>{
      await user.type(rePasswordElement,'rmsyadav@567');
     })
     expect(rePasswordElement).toHaveValue('rmsyadav@567');

     //******************* Mobile number  **********************
     const phoneElement = screen.getByTestId("telphone");
     await act(async()=>{
      await user.type(phoneElement,'8839847229');
     })
     expect(phoneElement).toHaveValue('8839847229');
     

     //******************* date of birth  **********************
     const birthdayDateElement = screen.getByTestId("birthdayDate");
     //await user.clear()
     await act(async()=>{
      await user.type(birthdayDateElement,'2000-01-01');
     })
     expect(birthdayDateElement).toHaveValue('2000-01-01');
     
     //******************* select gender  **********************
     const genderElement = screen.getByTestId("maleGender");
     await act(async()=>{
      await user.click(genderElement);
     })
     expect(genderElement).toHaveFocus();
     expect(genderElement).toBeChecked();

     //******************* Submit button  **********************
     const submitBtnElement = screen.getByTestId('submitbtn');
     await act(async()=>{
      await user.click(submitBtnElement);
     }) 
     const displayedSuccessMessage = await screen.findByText("Successfully you have registered!");
     expect(displayedSuccessMessage).toBeInTheDocument();
   });

   it('Failed to registration to my website!', async () => {
    const user = userEvent.setup();
     render(<BrowserRouter><Signup></Signup></BrowserRouter>);

     //**********************name******************
     const nameTextBoxElement = screen.getByTestId("name");
     await act(async()=>{
      await user.type(nameTextBoxElement,'Ramashankar kumar');
     }) 
     expect(screen.getByTestId('name')).toHaveValue('Ramashankar kumar');

     //******************email**************************
     const textBoxElement = screen.getByTestId("email");
     await act(async()=>{
      await user.type(textBoxElement,'rmsyadav678@gmail.com');
     }) 
     expect(screen.getByTestId('email')).toHaveValue('rmsyadav678@gmail.com');

     //*******************Password ****************
     const passwordElement = screen.getByTestId("password");
     await act(async()=>{
      await user.type(passwordElement,'rmsyadav@567');
     })
     expect(screen.getByTestId('password')).toHaveValue('rmsyadav@567');

     //*******************rePassword****************************

     const rePasswordElement = screen.getByTestId("rePassword");
     await act(async()=>{
      await user.type(rePasswordElement,'rmsyadav@567');
     })
     expect(rePasswordElement).toHaveValue('rmsyadav@567');

     //******************* Mobile number  **********************
     const phoneElement = screen.getByTestId("telphone");
     await act(async()=>{
      await user.type(phoneElement,'8839847229');
     })
     expect(phoneElement).toHaveValue('8839847229');
     

     //******************* date of birth  **********************
     const birthdayDateElement = screen.getByTestId("birthdayDate");
     //await user.clear()
     await act(async()=>{
      await user.type(birthdayDateElement,'2000-01-01');
     })
     expect(birthdayDateElement).toHaveValue('2000-01-01');
     
     //******************* select gender  **********************
     const genderElement = screen.getByTestId("maleGender");
     await act(async()=>{
      await user.click(genderElement);
     })
     expect(genderElement).toHaveFocus();
     expect(genderElement).toBeChecked();

     //******************* Submit button  **********************
     const submitBtnElement = screen.getByTestId('submitbtn');
     await act(async()=>{
      await user.click(submitBtnElement);
     }) 
     const displayedSuccessMessage = await screen.findByText("Something went wrong!");
     expect(displayedSuccessMessage).toBeInTheDocument();
   });

   it('Failed to validation of registration form! when name field as empty=>', async () => {
    const user = userEvent.setup();
     render(<BrowserRouter><Signup></Signup></BrowserRouter>);     

     //******************email**************************
     const textBoxElement = screen.getByTestId("email");
     await act(async()=>{
      await user.type(textBoxElement,'rmsyadav678@gmail.com');
     }) 
     expect(screen.getByTestId('email')).toHaveValue('rmsyadav678@gmail.com');

     //*******************Password ****************
     const passwordElement = screen.getByTestId("password");
     await act(async()=>{
      await user.type(passwordElement,'rmsyadav@567');
     })
     expect(screen.getByTestId('password')).toHaveValue('rmsyadav@567');

     //*******************rePassword****************************

     const rePasswordElement = screen.getByTestId("rePassword");
     await act(async()=>{
      await user.type(rePasswordElement,'rmsyadav@567');
     })
     expect(rePasswordElement).toHaveValue('rmsyadav@567');

     //******************* Mobile number  **********************
     const phoneElement = screen.getByTestId("telphone");
     await act(async()=>{
      await user.type(phoneElement,'8839847229');
     })
     expect(phoneElement).toHaveValue('8839847229');
     

     //******************* date of birth  **********************
     const birthdayDateElement = screen.getByTestId("birthdayDate");
     //await user.clear()
     await act(async()=>{
      await user.type(birthdayDateElement,'2000-01-01');
     })
     expect(birthdayDateElement).toHaveValue('2000-01-01');
     
     //******************* select gender  **********************
     const genderElement = screen.getByTestId("maleGender");
     await act(async()=>{
      await user.click(genderElement);
     })
     expect(genderElement).toHaveFocus();
     expect(genderElement).toBeChecked();

     //******************* Submit button  **********************
     const submitBtnElement = screen.getByTestId('submitbtn');
     await act(async()=>{
      await user.click(submitBtnElement);
     }) 
     const displayedSuccessMessage = await screen.findByText("Required");
     expect(displayedSuccessMessage).toBeInTheDocument();
   });

   it('Failed to registration to my website!', async () => {
    const user = userEvent.setup();
     render(<BrowserRouter><Signup></Signup></BrowserRouter>);

     //**********************name******************
     const nameTextBoxElement = screen.getByTestId("name");
     await act(async()=>{
      await user.type(nameTextBoxElement,'Ramashankar kumar yadav ji hello ji');
     }) 
     expect(screen.getByTestId('name')).toHaveValue('Ramashankar kumar yadav ji hello ji');

     //******************email**************************
     const textBoxElement = screen.getByTestId("email");
     await act(async()=>{
      await user.type(textBoxElement,'rmsyadav678@gmail.com');
     }) 
     expect(screen.getByTestId('email')).toHaveValue('rmsyadav678@gmail.com');

     //*******************Password ****************
     const passwordElement = screen.getByTestId("password");
     await act(async()=>{
      await user.type(passwordElement,'rmsyadav@567');
     })
     expect(screen.getByTestId('password')).toHaveValue('rmsyadav@567');

     //*******************rePassword****************************

     const rePasswordElement = screen.getByTestId("rePassword");
     await act(async()=>{
      await user.type(rePasswordElement,'rmsyadav@567');
     })
     expect(rePasswordElement).toHaveValue('rmsyadav@567');

     //******************* Mobile number  **********************
     const phoneElement = screen.getByTestId("telphone");
     await act(async()=>{
      await user.type(phoneElement,'8839847229');
     })
     expect(phoneElement).toHaveValue('8839847229');
     

     //******************* date of birth  **********************
     const birthdayDateElement = screen.getByTestId("birthdayDate");
     //await user.clear()
     await act(async()=>{
      await user.type(birthdayDateElement,'2000-01-01');
     })
     expect(birthdayDateElement).toHaveValue('2000-01-01');
     
     //******************* select gender  **********************
     const genderElement = screen.getByTestId("maleGender");
     await act(async()=>{
      await user.click(genderElement);
     })
     expect(genderElement).toHaveFocus();
     expect(genderElement).toBeChecked();

     //******************* Submit button  **********************
     const submitBtnElement = screen.getByTestId('submitbtn');
     await act(async()=>{
      await user.click(submitBtnElement);
     }) 
     const displayedSuccessMessage = await screen.findByText("Must be 25 characters or less");
     expect(displayedSuccessMessage).toBeInTheDocument();
   });
   it('Failed to registration to my website!', async () => {
    const user = userEvent.setup();
     render(<BrowserRouter><Signup></Signup></BrowserRouter>);
     //******************* Submit button  **********************
     const submitBtnElement = screen.getByTestId('submitbtn');
     await act(async()=>{
      await user.click(submitBtnElement);
     }) 
     const displayedSuccessMessage = await screen.findAllByTestId("errorLabel");
     expect(displayedSuccessMessage).toHaveLength(7);
   });
 
 });