import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event'
import Todo from '../Components/Todocomponents/Todo';

// App component testing for rendering is properly or not

describe("App component testing:- ",()=>{

  it('Todo component snapshot testing ',()=>{

    const todo = renderer.create(<Todo></Todo>).toJSON();
    expect(todo).toMatchSnapshot();
  })

  test('renders the todo component', () => {

    render(<Todo></Todo>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    const textBoxElement = screen.getByRole('textbox');
    expect(textBoxElement).toBeInTheDocument();
    
  });

  test('Perform the user action',async()=>{
    const user = userEvent.setup();
    render(<Todo></Todo>);
    const textBoxElement = screen.getByRole('textbox');
    await user.type(textBoxElement,'this is todo 1')
    expect(screen.getByRole('textbox')).toHaveValue('this is todo 1')
    const buttonElement = screen.getByRole('button');
    await user.click(buttonElement);
    const displayedTasks = await screen.findAllByTestId("list-group-item");
    expect(displayedTasks).toHaveLength(1);
    expect(screen.getByText('this is todo 1')).toBeInTheDocument();

    
  })
  

})

