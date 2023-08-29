import {Routes,Route} from 'react-router-dom';
import Navbar from './Navbar';
import List from "../Todocomponents/List";
import Todo from "../Todocomponents/Todo";
import SignIn from '../Signin';
import Signup1 from '../Signup';
import React, { Suspense } from 'react';
const Signup = React.lazy(()=>import("../Signup"))
const MyRoutes = ()=>{

    return(
    <>
      <Navbar></Navbar>
      <Suspense fallback={<><h1>Loading...</h1></>}>
      <Routes>
          
          <Route exact path="/" element={<Todo></Todo>}></Route>
          <Route exact path="/list" element={<List></List>}></Route>
          <Route exact path="/signin" element={<SignIn></SignIn>}></Route>
          <Route exact path="/signup" element={<Signup></Signup>}></Route>
         
      </Routes>
      </Suspense>
        
    </>
 )
}

export default MyRoutes;