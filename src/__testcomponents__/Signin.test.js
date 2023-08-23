import { rest } from 'msw';
import renderer from 'react-test-renderer';
import { render, screen,act } from '@testing-library/react';
import { setupServer } from 'msw/node';
import SignIn from '../Components/Signin';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'

const mockTasks ={users:"Ramashankar Kumar",token:"abdsdhkdhdjs@564783dndjsfaj",statusCode:200,statusMessage:"success!"}
const mockTasks2 ={statusCode:403,statusMessage:"error!"}

const getTasksPath ='/shopping/api/v1/login';

const formHandler = rest.post(getTasksPath, async (req, res, ctx) =>{
  const  body = await req.json();
  const {email,password} = await body;
  if(email === "rmsyadav567@gmail.com" && password === "rmsyadav@567"){
    return  res(ctx.json(mockTasks))
  } else {
    return res(ctx.json(mockTasks2))
  }
  
 }  
);

const mswServer = setupServer(formHandler);



describe('Signin component testing', () => {

   beforeAll(() => mswServer.listen());
   afterEach(() => mswServer.resetHandlers());
   afterAll(() => mswServer.close());
   
   it('Signin component snapshot testing ',()=>{

     const signin = renderer.create(<BrowserRouter><SignIn></SignIn></BrowserRouter>).toJSON();
     expect(signin).toMatchSnapshot();
   })

   it('succesfully loggedin to my website!', async () => {
    const user = userEvent.setup();
     render(<BrowserRouter><SignIn></SignIn></BrowserRouter>);
     const textBoxElement = screen.getByTestId("email");
     await act(async()=>{
      await user.type(textBoxElement,'rmsyadav567@gmail.com');
     }) 
     expect(screen.getByTestId('email')).toHaveValue('rmsyadav567@gmail.com');
     const passwordElement = screen.getByTestId("password");
     await act(async()=>{
      await user.type(passwordElement,'rmsyadav@567');
     })
     expect(screen.getByTestId('password')).toHaveValue('rmsyadav@567');
     const submitBtnElement = screen.getByTestId('submitbtn');
     await act(async()=>{
      await user.click(submitBtnElement);
     }) 
     const displayedSuccessMessage = await screen.findByText("Successfully you have loggedIn!");
     expect(displayedSuccessMessage).toBeInTheDocument(); 
   });
   it('Failed to login to my website!', async () => {
    const user = userEvent.setup();
     render(<BrowserRouter><SignIn></SignIn></BrowserRouter>);
     const textBoxElement = screen.getByTestId("email");
     await act(async()=>{
      await user.type(textBoxElement,'rmsyadav789@gmail.com');
     })
     expect(screen.getByTestId('email')).toHaveValue('rmsyadav789@gmail.com');
     const passwordElement = screen.getByTestId("password");
     await act(async()=>{
      await user.type(passwordElement,'rmsyadav@537');
     })
     expect(screen.getByTestId('password')).toHaveValue('rmsyadav@537');
     const submitBtnElement = screen.getByTestId('submitbtn');
     await act(async()=>{
      await user.click(submitBtnElement);
     }) 
     const displayedSuccessMessage = await screen.findByText("email or password is wrong!");
     expect(displayedSuccessMessage).toBeInTheDocument(); 
   });

   test('renders the todo component', async() => {
    const user = userEvent.setup();
    render(<BrowserRouter><SignIn></SignIn></BrowserRouter>);
    const buttonElement = screen.getByTestId('switchbtn');
    expect(buttonElement).toBeInTheDocument();
    await act(async()=>{
      await user.click(buttonElement);
    })
  });

  it('Check validation error message for email!', async () => {
     const user = userEvent.setup();
     render(<BrowserRouter><SignIn></SignIn></BrowserRouter>);
     const textBoxElement = screen.getByTestId("email");
     await act(async()=>{
      await user.type(textBoxElement,'rmsyadav789@gmail.com');
     })
     expect(screen.getByTestId('email')).toHaveValue('rmsyadav789@gmail.com');
     const submitBtnElement = screen.getByTestId('submitbtn');
     await act(async()=>{
      await user.click(submitBtnElement);
     })
     const displayedSuccessMessage = await screen.findByText("Required");
     expect(displayedSuccessMessage).toBeInTheDocument(); 
   });
   it("check error message for invalid email address",async()=>{
     const user = userEvent.setup();
     render(<BrowserRouter><SignIn></SignIn></BrowserRouter>);
     const textBoxElement = screen.getByTestId("email");
     await act(async()=>{
      await user.type(textBoxElement,'rmsyadav789gmail');
     })
     const passwordElement = screen.getByTestId("password");
     await act(async()=>{
      await user.type(passwordElement,'rmsyadav@537');
     })
     const submitBtnElement = screen.getByTestId('submitbtn');
     await act(async()=>{
      await user.click(submitBtnElement);
     })
     const displayedSuccessMessage = await screen.findByText("Invalid email address");
     expect(displayedSuccessMessage).toBeInTheDocument(); 
   });
   it('Check validation error message for email!', async () => {
    const user = userEvent.setup();
    render(<BrowserRouter><SignIn></SignIn></BrowserRouter>);
     const passwordElement = screen.getByTestId("password");
     await act(async()=>{
      await user.type(passwordElement,'rmsyadav@537');
     })
    const submitBtnElement = screen.getByTestId('submitbtn');
    await act(async()=>{
      await user.click(submitBtnElement);
     })
    const displayedSuccessMessage = await screen.findByText("Required");
    expect(displayedSuccessMessage).toBeInTheDocument(); 
  });
  it('Check validation error message for email and passwor both', async () => {
    const user = userEvent.setup();
    render(<BrowserRouter><SignIn></SignIn></BrowserRouter>);
    const submitBtnElement = screen.getByTestId('submitbtn');
    await act(async()=>{
      await user.click(submitBtnElement);
     })
    const displayedSuccessMessage = await screen.findAllByText("Required");
    expect(displayedSuccessMessage).toHaveLength(2); 
  });

 
 });