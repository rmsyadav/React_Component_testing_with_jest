import {render,screen, waitForElementToBeRemoved} from "@testing-library/react";
import renderer from 'react-test-renderer';
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import MyRoutes from "../Components/RoutesComponents/Router";
import { Provider } from "react-redux";
import store from "../StateContainer/Store";

describe("Routing testing of components",()=>{
    
    it("snapshot testing of Router component",()=>{
     
        const Router = renderer.create(<BrowserRouter><MyRoutes></MyRoutes></BrowserRouter>).toJSON();
        expect(Router).toMatchSnapshot();

    })

    it("Particular route testing",()=>{
        render(
            <MemoryRouter initialEntries={['/']}>
               <MyRoutes></MyRoutes>
            </MemoryRouter>
          );
      const todo= screen.getByText(/Todo App/i);
      expect(todo).toBeInTheDocument();
    });

    it("Particular route testing",()=>{
        render(
            <Provider store={store}>
            <MemoryRouter initialEntries={['/list']}>
               <MyRoutes></MyRoutes>
            </MemoryRouter>
            </Provider> 
          );
      waitForElementToBeRemoved(screen.queryByRole("status"),async()=>{
        const list= screen.getByText("Numbered List Group");
        expect(list).toBeInTheDocument();
      }); 
    });
    it("Route testing for signin component",()=>{
        render(
            <MemoryRouter initialEntries={['/signin']}>
               <MyRoutes></MyRoutes>
            </MemoryRouter>
          );
      const list= screen.getByText("Please login to your account");
      expect(list).toBeInTheDocument();
    });
    it("Route testing for signup component",async()=>{
        render(
            <MemoryRouter initialEntries={['/signup']}>
               <MyRoutes></MyRoutes>
            </MemoryRouter>
          );
      const list= await screen.findByText("Create an account");
      expect(list).toBeInTheDocument();
    });
})
