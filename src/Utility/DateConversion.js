
function dateConvertIntoMiliSecond(date){
    let dateObject = new Date(date);
    return dateObject.getTime();
 
 }
 
 export {dateConvertIntoMiliSecond};