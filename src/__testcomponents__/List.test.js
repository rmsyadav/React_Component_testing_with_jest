 import { rest } from 'msw';
 import renderer from 'react-test-renderer';
import { render, screen ,act} from '@testing-library/react';
import { setupServer } from 'msw/node';
import List from '../Components/Todocomponents/List';
import { Provider } from 'react-redux';
import store from '../StateContainer/Store';
const mockTasks = {
  comments:[
    {
      id: 1,
      body: "This is some awesome thinking!",
      postId: 100,
      user: {
          id: 63,
          username: "eburras1q"
      }
  },
  {
      id: 2,
      body: "What terrific math skills you’re showing!",
      postId: 27,
      user: {
          id: 71,
          username: "omarsland1y"
      }
  },
 ]
}

const getTasksPath ='https://dummyjson.com/comments';

const tasksHandler = rest.get(getTasksPath, async (req, res, ctx) =>{
   return  res(ctx.json(mockTasks))
  }  
);

const mswServer = setupServer(tasksHandler);



describe('Component: TaskList', () => {

    beforeAll(() => mswServer.listen());
    afterEach(() => mswServer.resetHandlers());
    afterAll(() => mswServer.close());
    
    it('List component snapshot testing ',()=>{

      const list = renderer.create(<Provider store={store}><List></List></Provider>).toJSON();
      expect(list).toMatchSnapshot();
    })

    it('displays returned tasks on successful fetch', async () => {
      
      
      await act(()=>{
        render(<Provider store={store}><List></List></Provider>);
      })
      const displayedTasks = await screen.findAllByTestId("list-group-item");
      expect(displayedTasks).toHaveLength(2);
      expect(screen.getByText('This is some awesome thinking!')).toBeInTheDocument();
      expect(screen.getByText('What terrific math skills you’re showing!')).toBeInTheDocument();
      
    });
  
  });