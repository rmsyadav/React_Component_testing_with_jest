
import {filterByComments,filterByPostid,filterByUserid,filterByUsername} from "../Utility/filterCommentsByInput";

const mockData = [
    {
        "id": 1,
        "body": "This is some awesome thinking!",
        "postId": 100,
        "user": {
            "id": 63,
            "username": "eburras1q"
        }
    },
    {
        "id": 2,
        "body": "What terrific math skills you’re showing!",
        "postId": 27,
        "user": {
            "id": 71,
            "username": "omarsland1y"
        }
    },
    {
        "id": 3,
        "body": "You are an amazing writer!",
        "postId": 61,
        "user": {
            "id": 29,
            "username": "jissetts"
        }
    }
]
describe("Action function testing:- ",()=>{

    it('Action Creator function  testing ',()=>{

        expect(filterByComments({filterText:"What terrific math skills you’re",comments:mockData})).toEqual([{
            "id": 2,
            "body": "What terrific math skills you’re showing!",
            "postId": 27,
            "user": {
                "id": 71,
                "username": "omarsland1y"
            }
        }]);
    }) 
    it('Action Creator function  testing ',()=>{
        expect(filterByPostid({filterText:"27",comments:mockData})).toEqual([{
            "id": 2,
            "body": "What terrific math skills you’re showing!",
            "postId": 27,
            "user": {
                "id": 71,
                "username": "omarsland1y"
            }
        }]);
    }) 
    it('Action Creator function  testing ',()=>{
        expect(filterByUserid({filterText:"2",comments:mockData})).toEqual([{
            "id": 2,
            "body": "What terrific math skills you’re showing!",
            "postId": 27,
            "user": {
                "id": 71,
                "username": "omarsland1y"
            }
        }]);
    })
    it('Action Creator function  testing ',()=>{
        expect(filterByUsername({filterText:"omarsland1y",comments:mockData})).toEqual([{
            "id": 2,
            "body": "What terrific math skills you’re showing!",
            "postId": 27,
            "user": {
                "id": 71,
                "username": "omarsland1y"
            }
        }]);
    }) 
  
  })