 import { rest } from 'msw';
 import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { setupServer } from 'msw/node';
import List from '../Components/Todocomponents/List';
const mockTasks = {
  comments:[
  { id: 0, body: 'Task Zero', completed: false },
  { id: 1, body: 'Task One', completed: true }
 ]
}

const getTasksPath ='https://dummyjson.com/comments';

const tasksHandler = rest.get(getTasksPath, async (req, res, ctx) =>{
  console.log(mockTasks);
   return  res(ctx.json(mockTasks))
  }  
);

const mswServer = setupServer(tasksHandler);



describe('Component: TaskList', () => {

    beforeAll(() => mswServer.listen());
    afterEach(() => mswServer.resetHandlers());
    afterAll(() => mswServer.close());
    
    it('List component snapshot testing ',()=>{

      const list = renderer.create(<List></List>).toJSON();
      expect(list).toMatchSnapshot();
    })

    it('displays returned tasks on successful fetch', async () => {
      
      render(<List></List>);
      const displayedTasks = await screen.findAllByTestId("list-group-item");
      expect(displayedTasks).toHaveLength(2);
      expect(screen.getByText('Task Zero')).toBeInTheDocument();
      expect(screen.getByText('Task One')).toBeInTheDocument();
      
    });
  
  });