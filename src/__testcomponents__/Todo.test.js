import { render, screen ,act} from '@testing-library/react';
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
      await act(async()=>{
        await user.type(textBoxElement,'this is todo 1')
      })
      expect(screen.getByRole('textbox')).toHaveValue('this is todo 1')
      const buttonElement = screen.getByRole('button');
      await act(async()=>{
        await user.click(buttonElement)
      })
    const displayedTasks = await screen.findAllByTestId("list-group-item");
    expect(displayedTasks).toHaveLength(1);
    expect(screen.getByText('this is todo 1')).toBeInTheDocument();
    
  })
  test('When I would not fill text in todoField then it will through error!',async()=>{
    const user = userEvent.setup();
    render(<Todo></Todo>);
      const buttonElement = screen.getByRole('button');
      await act(async()=>{
        await user.click(buttonElement)
      })
    const displayedTasks = await screen.findByTestId("todoError");
    expect(displayedTasks).toBeInTheDocument();
    await act(async()=>{
      await new Promise((r) => setTimeout(r, 3000));
    })
    const displayedTasks1 = screen.queryByTestId("todoError");
    expect(displayedTasks1).not.toBeInTheDocument();
  })
  test('Deleting the todo from existing todo',async()=>{
    const user = userEvent.setup();
    render(<Todo></Todo>);
      const textBoxElement = screen.getByRole('textbox');
      await act(async()=>{
        await user.type(textBoxElement,'this is todo 1')
      })
      expect(screen.getByRole('textbox')).toHaveValue('this is todo 1')
      const buttonElement = screen.getByRole('button');
      await act(async()=>{
        await user.click(buttonElement)
      })
    const displayedTasks = await screen.findAllByTestId("list-group-item");
    expect(displayedTasks).toHaveLength(1);
    expect(screen.getByText('this is todo 1')).toBeInTheDocument();
    const deleteBtn = await screen.findByTestId('deleteTodo');
    await act(async()=>{
         await user.click(deleteBtn)
      })
    const displayedTodo = screen.queryAllByTestId("list-group-item");
    expect(displayedTodo).toHaveLength(0);
  })

})

