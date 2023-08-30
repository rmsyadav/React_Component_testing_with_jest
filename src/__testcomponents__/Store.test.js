import { rest } from 'msw';
import { render, screen ,act} from '@testing-library/react';
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
     return  res(ctx.json(mockTasks))
    }  
  );

  
const mswServer = setupServer(tasksHandler);
describe('Games redux state tests', () => {

    beforeAll(() => mswServer.listen());
    afterEach(() => mswServer.resetHandlers());
    afterAll(() => mswServer.close());

  it('Should initially set games to an empty object', () => {
    const state = store.getState().commentsSlice;
    expect(state.comments).toHaveLength(0);
  })

  it('Should be able to fetch the games list for a specific user', async () => {
    const result = await store.dispatch(fetchComments())
    const comments = result.payload

    expect(result.type).toBe('comments/fetchcomments/fulfilled')
    expect(comments).toEqual(mockTasks)
  })
  it('Should be not able to fetch the games list for a specific user',  async() => {
    
    const result = await store.dispatch(fetchComments())
    expect(result.type).not.toBe('comments/fetchcomments/rejected')
   
  })
})