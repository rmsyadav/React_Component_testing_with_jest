import axios from "axios";
import { useEffect, useState } from 'react';
import "../../Stylesheet/Todo.css";


const List =()=> {

   const [comments,setcomments] = useState([]);

   useEffect(()=>{
        axios.get('https://dummyjson.com/comments').then((res)=>{
            setcomments(res.data.comments);
        })
   },[]) 

  return (
   <>
    <div className="container mt-3">
        <h2>Numbered List Group</h2>
        </div>
        
        <div className="container mt-3">
        <ol className="list-group list-group-light">
               <li className="list-group-item column-list-text d-flex justify-content-between align-items-center">
                    <span className="badge rounded-pill text-dark">USERID</span>
                    <div className="d-flex flex-column justify-content-between align-items-center">
                      <div className="fw-bold text-dark">USERNAME/COMMENTS</div>
                    </div>
                    <span className="badge rounded-pill text-dark">POSTID</span>
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
   </>
  );
}

export default List;
