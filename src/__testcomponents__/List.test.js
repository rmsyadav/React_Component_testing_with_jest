 import { rest } from 'msw';
 import renderer from 'react-test-renderer';
import { fireEvent,render, screen ,act} from '@testing-library/react';
import { setupServer } from 'msw/node';
import List from '../Components/Todocomponents/List';
import { Provider } from 'react-redux';
import store from '../StateContainer/Store';
import userEvent,{specialChars} from '@testing-library/user-event'
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
    // filter functionality test cases 

    it('Check validation error message for email!', async () => {
      const user = userEvent.setup();
      render(<Provider store={store}><List></List></Provider>);
      const dropDownBtn = await screen.findByTestId("filterByOptions");
      await act(async()=>{
       await user.selectOptions(dropDownBtn,"USERNAME");
      })
      const textBoxElement = screen.getByTestId("filtertext");
      await act(async()=>{
        await user.type(textBoxElement,'omarsland1y');
      })
      expect(textBoxElement).toHaveValue('omarsland1y');
      const searchBtnElement = screen.getByTestId('searchbtn');
      await act(async()=>{
       await user.click(searchBtnElement);
      })
      const displayedTasks = await screen.findAllByTestId("list-group-item");
      const comments = displayedTasks.map(item => item.textContent);
      expect(comments).toEqual(['2omarsland1yWhat terrific math skills you’re showing!27'])
      expect(displayedTasks).toHaveLength(1);
    });
    it('Check validation error message for email!', async () => {
      const user = userEvent.setup();
      render(<Provider store={store}><List></List></Provider>);
      const dropDownBtn = await screen.findByTestId("filterByOptions");
      await act(async()=>{
       await user.selectOptions(dropDownBtn,"COMMENTS");
      })
      const textBoxElement = screen.getByTestId("filtertext");
      await act(async()=>{
        await user.type(textBoxElement,'What terrific math skills');
      })
      expect(textBoxElement).toHaveValue('What terrific math skills');
      const searchBtnElement = screen.getByTestId('searchbtn');
      await act(async()=>{
       await user.click(searchBtnElement);
      })
      const displayedTasks = await screen.findAllByTestId("list-group-item");
      const comments = displayedTasks.map(item => item.textContent);
      expect(comments).toEqual(['2omarsland1yWhat terrific math skills you’re showing!27'])
      expect(displayedTasks).toHaveLength(1);

    });
    it('Check validation error message for email!', async () => {
      const user = userEvent.setup();
      render(<Provider store={store}><List></List></Provider>);
      const dropDownBtn = await screen.findByTestId("filterByOptions");
      await act(async()=>{
       await user.selectOptions(dropDownBtn,"POSTID");
      })
      const textBoxElement = screen.getByTestId("filtertext");
      await act(async()=>{
        await user.type(textBoxElement,'27');
      })
      expect(textBoxElement).toHaveValue('27');
      const searchBtnElement = screen.getByTestId('searchbtn');
      await act(async()=>{
       await user.click(searchBtnElement);
      })
      const displayedTasks = await screen.findAllByTestId("list-group-item");
      const comments = displayedTasks.map(item => item.textContent);
      expect(comments).toEqual(['2omarsland1yWhat terrific math skills you’re showing!27'])
      expect(displayedTasks).toHaveLength(1);
    });
    it('Check validation error message for email!', async () => {
      const user = userEvent.setup();
      render(<Provider store={store}><List></List></Provider>);
      const dropDownBtn = await screen.findByTestId("filterByOptions");
      await act(async()=>{
       await user.selectOptions(dropDownBtn,"USERID");
      })
      const textBoxElement = screen.getByTestId("filtertext");
      await act(async()=>{
        await user.type(textBoxElement,'2');
      })
      expect(textBoxElement).toHaveValue('2');
      const searchBtnElement = screen.getByTestId('searchbtn');
      await act(async()=>{
       await user.click(searchBtnElement);
      })
      const displayedTasks = await screen.findAllByTestId("list-group-item");
      const comments = displayedTasks.map(item => item.textContent);
      expect(comments).toEqual(['2omarsland1yWhat terrific math skills you’re showing!27'])
      expect(displayedTasks).toHaveLength(1);
    });
    it('Check validation error message for email!', async () => {
      const user = userEvent.setup();
      render(<Provider store={store}><List></List></Provider>);
      const dropDownBtn = await screen.findByTestId("filterByOptions");
      await act(async()=>{
       await user.selectOptions(dropDownBtn,"Filter by given options");
      })
      const textBoxElement = screen.getByTestId("filtertext");
      await act(async()=>{
        await user.type(textBoxElement,'eburras1q');
      })
      expect(textBoxElement).toHaveValue('eburras1q');
      const searchBtnElement = screen.getByTestId('searchbtn');
      await act(async()=>{
       await user.click(searchBtnElement);
      })
      const displayedTasks = await screen.findAllByTestId("list-group-item");
      expect(displayedTasks).toHaveLength(2);
    });

    it('Check validation error message for email!', async () => {
      const user = userEvent.setup();
      render(<Provider store={store}><List></List></Provider>);
      const dropDownBtn = await screen.findByTestId("filterByOptions");
      await act(async()=>{
       await user.selectOptions(dropDownBtn,"Filter by given options");
      })
      const textBoxElement = screen.getByTestId("filtertext");
      
      await act(async()=>{
        await user.type(textBoxElement,"a");
      })
      await act(async()=>{
        await user.clear(textBoxElement);
      })
    });
     
    // sorting functionality test case

    it('Check validation error message for email!', async () => {
      const user = userEvent.setup();
      render(<Provider store={store}><List></List></Provider>);
      const dropDownBtn = await screen.findByTestId("sortByOptions");
      await act(async()=>{
       await user.selectOptions(dropDownBtn,"USERNAME");
      })
      //expect(screen.getByText('USERNAME').selected).toBe(true)
      const displayedTasks = await screen.findAllByTestId("list-group-item");
      const comments = displayedTasks.map(item => item.textContent);
      expect(comments).toEqual([
      '1eburras1qThis is some awesome thinking!100',
      '2omarsland1yWhat terrific math skills you’re showing!27'
    ])
      expect(displayedTasks).toHaveLength(2);
    });
    it('Check validation error message for email!', async () => {
      const user = userEvent.setup();
      render(<Provider store={store}><List></List></Provider>);
      const dropDownBtn = await screen.findByTestId("sortByOptions");
      await act(async()=>{
       await user.selectOptions(dropDownBtn,"COMMENTS");
      })
      //expect(screen.getByText('USERNAME').selected).toBe(true)
      const displayedTasks = await screen.findAllByTestId("list-group-item");
      const comments = displayedTasks.map(item => item.textContent);
      expect(comments).toEqual([
      '1eburras1qThis is some awesome thinking!100',
      '2omarsland1yWhat terrific math skills you’re showing!27'
    ])
      expect(displayedTasks).toHaveLength(2);
    });
    it('Check validation error message for email!', async () => {
      const user = userEvent.setup();
      render(<Provider store={store}><List></List></Provider>);
      const dropDownBtn = await screen.findByTestId("sortByOptions");
      await act(async()=>{
       await user.selectOptions(dropDownBtn,"USERID");
      })
      //expect(screen.getByText('USERNAME').selected).toBe(true)
      const displayedTasks = await screen.findAllByTestId("list-group-item");
      const comments = displayedTasks.map(item => item.textContent);
      expect(comments).toEqual([
      '1eburras1qThis is some awesome thinking!100',
      '2omarsland1yWhat terrific math skills you’re showing!27'
    ])
      expect(displayedTasks).toHaveLength(2);
    });
    it('Check validation error message for email!', async () => {
      const user = userEvent.setup();
      render(<Provider store={store}><List></List></Provider>);
      const dropDownBtn = await screen.findByTestId("sortByOptions");
      await act(async()=>{
       await user.selectOptions(dropDownBtn,"POSTID");
      })
      //expect(screen.getByText('USERNAME').selected).toBe(true)
      const displayedTasks = await screen.findAllByTestId("list-group-item");
      const comments = displayedTasks.map(item => item.textContent);
      expect(comments[1]).toEqual('1eburras1qThis is some awesome thinking!100')
      expect(comments[0]).toEqual('2omarsland1yWhat terrific math skills you’re showing!27')
      expect(displayedTasks).toHaveLength(2);
    });

    it('Check validation error message for email!', async () => {
      const user = userEvent.setup();
      render(<Provider store={store}><List></List></Provider>);
      const dropDownBtn = await screen.findByTestId("sortByOptions");
      await act(async()=>{
       await user.selectOptions(dropDownBtn,"Sort by given options");
      })
      //expect(screen.getByText('USERNAME').selected).toBe(true)
      const displayedTasks = await screen.findAllByTestId("list-group-item");
      const comments = displayedTasks.map(item => item.textContent);
      expect(comments[0]).toEqual('1eburras1qThis is some awesome thinking!100')
      expect(comments[1]).toEqual('2omarsland1yWhat terrific math skills you’re showing!27')
      expect(displayedTasks).toHaveLength(2);
    }); 
  
  });