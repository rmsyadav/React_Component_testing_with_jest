import axios from "axios";
import { useEffect, useState } from 'react';
import "../../Stylesheet/Todo.css";
import "../../Stylesheet/Signup.css"
import Footer from "../CommonComponents/Footer";

const List =()=> {

   const [comments,setcomments] = useState([]);

   useEffect(()=>{
        axios.get('https://dummyjson.com/comments').then((res)=>{
            setcomments(res.data.comments);
        })
   },[]) 

  return (
   <>
      <section className="container-fluid rounded-3" style={{backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}}>
        <div className="container py-5 gradient-custom-3">
        <div className="container d-flex justify-content-center align-item-center">
        <h2>Numbered List Group</h2>
        </div> 
        <div className="container1 text-center mt-3">
        <ol className="list-group list-group-light">
               <li className="list-group-item column-list-text d-flex justify-content-between align-items-center">
                    <span className="badge rounded-pill text-light">USERID</span>
                    <span className="badge rounded-pill fw-bold text-light">USERNAME/COMMENTS</span>
                    <span className="badge rounded-pill text-light">POSTID</span>
                </li>
            {comments && comments.map((comment,id)=>{
                return (
                <li className="list-group-item d-flex justify-content-between align-items-center" data-testid="list-group-item" key={id}>
                     <span className="badge rounded-pill text-success">{comment.id}</span>
                    <div className="d-flex flex-column justify-content-between align-items-center">
                    <div className="fw-bold">{comment.user.username}</div>
                    <div className="text-muted">{comment.body}</div>
                    </div>
                    <span className="badge rounded-pill text-success">{comment.postId}</span>
                </li>
               )
            })}
        </ol>
        </div>
        </div> 
    </section>
    <Footer></Footer>  
   </>
  );
}

export default List;
