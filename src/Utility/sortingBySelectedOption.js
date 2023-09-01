
const sortByComments = (commentsData)=>{
    let tempComments = [...commentsData.comments];
    tempComments.sort((comment1,comment2)=>{
        if (comment1.body.toUpperCase() < comment2.body.toUpperCase()) {
            return -1;
          }
          if (comment1.body.toUpperCase() > comment2.body.toUpperCase()) {
            return 1;
          }
        
          // names must be equal
          return 0;
     })
     return tempComments;
  }
    const sortByUsername =(commentsData)=>{
        let tempComments = [...commentsData.comments];
        tempComments.sort((comment1,comment2)=>{
            if (comment1.user.username.toUpperCase() < comment2.user.username.toUpperCase()) {
                return -1;
              }
              if (comment1.user.username.toUpperCase() > comment2.user.username.toUpperCase()) {
                return 1;
              }
            
              // names must be equal
              return 0;
         })
         return tempComments;
        
    }

    const sortByUserid = (commentsData)=>{
        let tempComments = [...commentsData.comments];
        tempComments.sort((comment1,comment2)=>{
            if (comment1.id < comment2.id) {
                return -1;
              }
              if (comment1.id > comment2.id) {
                return 1;
              }
            
               // names must be equal
              return 0;
         })
         return tempComments;   
   
    }
    const sortByPostid = (commentsData)=>{
        let tempComments = [...commentsData.comments];
        tempComments.sort((comment1,comment2)=>{
            if (comment1.postId < comment2.postId) {
                return -1;
              }
              if (comment1.postId > comment2.postId) {
                return 1;
              }
            
              // names must be equal
              return 0;
         })
         return tempComments;
    }

export {sortByComments,sortByPostid,sortByUserid,sortByUsername};