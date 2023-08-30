import {render,screen,act, waitForElementToBeRemoved} from "@testing-library/react";
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event'
import Navbar from "../Components/RoutesComponents/Navbar";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "../Components/RoutesComponents/Router";
import { Provider } from "react-redux";
import store from "../StateContainer/Store";

describe("App component testing:- ",()=>{

    it('Navbar component snapshot testing ',()=>{
  
      const navbarRoot = renderer.create(<BrowserRouter><Navbar></Navbar></BrowserRouter>).toJSON();
      expect(navbarRoot).toMatchSnapshot();
    })
  
    test('renders learn react link', async() => {
      const user = userEvent.setup()
      render(<BrowserRouter><MyRoutes></MyRoutes></BrowserRouter>);

      const linkElement = screen.getByTestId('home');
      expect(linkElement).toBeInTheDocument();
      await act(async()=>{
        await user.click(screen.getByTestId('home'));
      })
      const list= screen.getByText(/Todo App/i);
      expect(list).toBeInTheDocument();
      
    });

    test('renders learn react link', async() => {
        const user = userEvent.setup()
        render(<Provider store={store}><BrowserRouter><MyRoutes></MyRoutes></BrowserRouter></Provider>);
        const linkElement = screen.getByTestId('list');
        expect(linkElement).toBeInTheDocument();
        await act(async()=>{
          await user.click(screen.getByTestId('list'));
         })
        waitForElementToBeRemoved(screen.queryByRole("status"),async()=>{
          const list= await screen.findByText(/Numbered List Group/i);
          expect(list).toBeInTheDocument();
        }); 
      });
      test('checking wether redirecting on signin component', async() => {
        const user = userEvent.setup()
        render(<Provider store={store}><BrowserRouter><MyRoutes></MyRoutes></BrowserRouter></Provider>);
        const linkElement = screen.getByTestId('signin');
        expect(linkElement).toBeInTheDocument();
        await act(async()=>{
          await user.click(linkElement);
        })
        const signin= screen.getByText(/Please login to your account/i);
        expect(signin).toBeInTheDocument();
        
      });
      test('checking wether redirecting on signup component', async() => {
        const user = userEvent.setup()
        render(<BrowserRouter><MyRoutes></MyRoutes></BrowserRouter>);
        const linkElement = screen.getByTestId('signup');
        expect(linkElement).toBeInTheDocument();
        await act(async()=>{
          await user.click(linkElement);
        })
        const signin= screen.getByText(/Create an account/i);
        expect(signin).toBeInTheDocument();
        
      });
    
  
  })