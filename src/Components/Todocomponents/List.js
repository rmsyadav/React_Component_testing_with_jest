import { useEffect, useState } from 'react';
import "../../Stylesheet/Todo.css";
import "../../Stylesheet/Signup.css";
import "../../Stylesheet/List.css";
import Footer from "../CommonComponents/Footer";
import { fetchComments } from "../../Slice/Comments";
import {filterByComments,filterByPostid,filterByUserid,filterByUsername} from "../../Utility/filterCommentsByInput"
import {sortByComments,sortByPostid,sortByUserid,sortByUsername} from "../../Utility/sortingBySelectedOption"
import { useDispatch, useSelector } from "react-redux";
const List =()=> {
   const dispatch = useDispatch();
   const [filterOption,setFilterOption] = useState();
   const [filterText,setFilterText] = useState();
   const [comments,setComments] = useState([]);
   const [sortingOption,setSortingOptions] = useState("Sort by given options");
   const storeState = useSelector((store)=>store.commentsSlice)
   useEffect(()=>{
       const asyncFn = async () => {
        const data = await dispatch(fetchComments());
        data.payload && setComments(data.payload.comments);
       };
       asyncFn();
         // eslint-disable-next-line 
   },[]) 
   const selectedOption =(event)=>{
    setFilterOption(event.target.value)
   }
   const setChangeText =(event)=>{
     setFilterText(event.target.value);
     if(event.target.value === "")
     { 
       setComments(storeState.comments);
       sortingBySelectedOption(sortingOption); 
     }
   }
   const sortByOption =(event)=>{
      setSortingOptions(event.target.value);
      sortingBySelectedOption(event.target.value);
   }

  const sortingBySelectedOption = (selectedOption)=>{
    
    switch(selectedOption){
        case "USERNAME":
            const tempMap1 = sortByUsername({comments:storeState.comments});
            setComments(tempMap1);
            break;
        case "USERID":  
            const tempMap2 = sortByUserid({comments:storeState.comments});
            setComments(tempMap2)
            break;
        case "POSTID":
            const tempMap3 = sortByPostid({comments:storeState.comments});
            setComments(tempMap3)
            break;
        case "COMMENTS":
            const tempMap4 = sortByComments({comments:storeState.comments});
            setComments(tempMap4)
            break;
        default:
            setComments(storeState.comments);   
     } 
  } 
  const filterBySelectedOption = (event)=>{
     event.preventDefault();
     switch(filterOption){
        case "USERNAME":
            const tempMap1 = filterByUsername({filterText:filterText,comments:storeState.comments});
            setComments(tempMap1);
            break;
        case "USERID":  
            const tempMap2 = filterByUserid({filterText:filterText,comments:storeState.comments});
            setComments(tempMap2)
            break;
        case "POSTID":
            const tempMap3 = filterByPostid({filterText:filterText,comments:storeState.comments});
            setComments(tempMap3)
            break;
        case "COMMENTS":
            const tempMap4 = filterByComments({filterText:filterText,comments:storeState.comments});
            setComments(tempMap4)
            break;
        default:
            setComments(storeState.comments);   
     }  
       
  }
  return (
   <>
        {storeState.isLoading ? 
            <div className="spinner-border text-warning spinner-icon" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
        :  
        <section className="container-fluid rounded-3" style={{backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}}>
            <div className="container py-5 gradient-custom-3">
            <div className="container d-flex justify-content-between search-filter align-item-center">
            <h4 className='animate-charcter mt-auto'>USER COMMENTS</h4>
            <form className="d-flex">
            <select className="form-select me-3" aria-label="Default select example" data-testid="sortByOptions" onChange={sortByOption}>
                <option defaultValue="Filter by given options">Sort by given options</option>
                <option value="USERNAME">USERNAME</option>
                <option value="USERID">USERID</option>
                <option value="COMMENTS">COMMENTS</option>
                <option value="POSTID">POSTID</option>
            </select>
            <select className="form-select me-3" aria-label="Default select example" data-testid="filterByOptions" onChange={selectedOption}>
                <option defaultValue="Filter by given options">Filter by given options</option>
                <option value="USERNAME">USERNAME</option>
                <option value="USERID">USERID</option>
                <option value="COMMENTS">COMMENTS</option>
                <option value="POSTID">POSTID</option>
            </select>   
                <input className="form-control me-1" type="search" onChange={setChangeText} placeholder="Search" data-testid="filtertext" aria-label="Search"/>
                <button className="btn btn-outline-success" data-testid="searchbtn" onClick={filterBySelectedOption}>Search</button>
            </form>
            </div> 
            <div className="container text-center mt-3">
            <ol className="list-group list-group-light">
                <li className="list-group-item column-list-text d-flex justify-content-between align-items-center">
                        <span className="badge rounded-pill text-light">USERID</span>
                        <span className="badge rounded-pill fw-bold text-light">USERNAME</span>
                        <span className="badge rounded-pill fw-bold text-light">COMMENTS</span>
                        <span className="badge rounded-pill text-light">POSTID</span>
                    </li>
                {comments && comments.map((comment,index)=>{
                    return (
                    <li className="list-group-item d-flex justify-content-between align-items-center" data-testid="list-group-item" key={index}>
                        <span className="badge rounded-pill text-success">{comment.id}</span>
                        <span className="badge rounded-pill fw-bold text-success">{comment.user.username}</span>
                        <span className="badge rounded-pill fw-bold text-success">{comment.body}</span>
                        <span className="badge rounded-pill text-success">{comment.postId}</span>
                    </li>
                )
                })}
            </ol>
            </div>
            </div>
            <Footer></Footer>  
        </section>  
        }
   </>
  );
}

export default List;
