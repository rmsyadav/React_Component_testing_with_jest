import {render,screen} from "@testing-library/react";
import renderer from 'react-test-renderer';
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import MyRoutes from "../Components/RoutesComponents/Router";

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
      const todo= screen.getByText("Todo example");
      expect(todo).toBeInTheDocument();
    });

    it("Particular route testing",()=>{
        render(
            <MemoryRouter initialEntries={['/list']}>
               <MyRoutes></MyRoutes>
            </MemoryRouter>
          );
      const list= screen.getByText("Numbered List Group");
      expect(list).toBeInTheDocument();
    });
})
