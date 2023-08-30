import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fetchComments } from '../Slice/Comments';
import store from '../StateContainer/Store'
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
     return  res(ctx.status(500))
    }  
  );

  
const mswServer = setupServer(tasksHandler);
describe('Games redux state tests', () => {

    beforeAll(() => mswServer.listen());
    afterEach(() => mswServer.resetHandlers());
    afterAll(() => mswServer.close());

  it('Should be not able to fetch the games list for a specific user',  async() => {
    
    const result = await store.dispatch(fetchComments())
    expect(result.type).toBe('comments/fetchcomments/rejected')
   
  })
})