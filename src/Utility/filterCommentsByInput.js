
   const filterByComments = (commentsData)=>{
    const tempMap = commentsData.comments.filter((comment)=>{
        if(comment.body.startsWith(commentsData.filterText))
        {
            return true;
        }
        return false
     })
     return tempMap;
    }
   const filterByUsername =(commentsData)=>{
    const tempMap = commentsData.comments.filter((comment)=>{
        if(comment.user.username.startsWith(commentsData.filterText))
        {
            return true;
        }
        return false
     })
     return tempMap;
    }
    const filterByUserid = (commentsData)=>{
        
        const tempMap = commentsData.comments.filter((comment)=>{
            if(comment.id.toString() === commentsData.filterText)
            {
                return true;
            }
            return false
         })
         return tempMap;
    }
    const filterByPostid = (commentsData)=>{
        const tempMap = commentsData.comments.filter((comment)=>{
            if(comment.postId.toString() === commentsData.filterText)
            {
                return true;
            }
            return false
         })
         return tempMap;  
    }

export {filterByComments,filterByPostid,filterByUserid,filterByUsername};