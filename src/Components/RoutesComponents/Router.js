import {Routes,Route} from 'react-router-dom';
import Navbar from './Navbar';
import List from "../Todocomponents/List";
import Todo from "../Todocomponents/Todo";

const MyRoutes = ()=>{

    return(
    <>
      <Navbar></Navbar>
      <Routes>
          <Route exact path="/" element={<Todo></Todo>}></Route>
          <Route exact path="/list" element={<List></List>}></Route>
      </Routes>
        
    </>
 )
}

export default MyRoutes;