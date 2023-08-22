import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../Components/App';

// App component testing for rendering is properly or not

describe("App component testing:- ",()=>{

  it('List component snapshot testing ',()=>{

    const app = renderer.create(<App></App>).toJSON();
    expect(app).toMatchSnapshot();
  })

  test('renders learn react link', () => {

    render(<App/>);
    const linkElement = screen.getByText(/Learn React/i);
    expect(linkElement).toBeInTheDocument();
    
  });
  

})

