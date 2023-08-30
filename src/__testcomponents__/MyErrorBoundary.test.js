import { render, screen } from '@testing-library/react';
import MyErrorBoundary from '../Components/CommonComponents/MyErrorBoundary';
// App component testing for rendering is properly or not

const errorSpy = jest.spyOn(global.console, 'error');
const logSpy = jest.spyOn(global.console, 'log');
describe("App component testing:- ",()=>{

    test('renders learn react link', () => {

    logSpy.mockImplementation(()=>null);
    errorSpy.mockImplementation(()=>null);
    
    const ThrowError = () => {
        throw new Error("something went wrong!");
    }
    render(
      <MyErrorBoundary>
         <ThrowError></ThrowError>
      </MyErrorBoundary>
    );
    const errormessage = screen.getByTestId("errorBoundary");
    expect(errormessage).toBeVisible();
    
  });
  

})

