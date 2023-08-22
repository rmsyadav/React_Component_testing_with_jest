import axios from "axios";
import { useEffect, useState } from 'react';


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
        <ol className="list-group list-group-numbered">
            {comments && comments.map((comment,id)=>{
                return (<li data-testid="list-group-item" key={id}>{comment.body}</li>)
            })}
        </ol>
   </div>
   </>
  );
}

export default List;
