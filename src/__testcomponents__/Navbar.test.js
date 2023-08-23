import {render,screen,act} from "@testing-library/react";
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event'
import Navbar from "../Components/RoutesComponents/Navbar";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "../Components/RoutesComponents/Router";

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
        render(<BrowserRouter><MyRoutes></MyRoutes></BrowserRouter>);
  
        const linkElement = screen.getByTestId('list');
        expect(linkElement).toBeInTheDocument();
        await act(async()=>{
          await user.click(screen.getByTestId('list'));
         })
        const list= screen.getByText(/Numbered List Group/i);
        expect(list).toBeInTheDocument();
        
      });
      test('checking wether redirecting on signin component', async() => {
        const user = userEvent.setup()
        render(<BrowserRouter><MyRoutes></MyRoutes></BrowserRouter>);
        const linkElement = screen.getByTestId('signin');
        expect(linkElement).toBeInTheDocument();
        await act(async()=>{
          await user.click(linkElement);
        })
        const signin= screen.getByText(/Please login to your account/i);
        expect(signin).toBeInTheDocument();
        
      });
    
  
  })