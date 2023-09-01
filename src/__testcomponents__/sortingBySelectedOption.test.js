
import {sortByComments,sortByPostid,sortByUserid,sortByUsername} from "../Utility/sortingBySelectedOption"

const mockData = [
    {
        "id": 4,
        "body": "Wow! You have improved so much!",
        "postId": 8,
        "user": {
            "id": 19,
            "username": "bleveragei"
        }
    }, 
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

    it('sortByComments function  testing ',()=>{

        expect(sortByComments({comments:mockData})).toEqual([{
            "id": 1,
            "body": "This is some awesome thinking!",
            "postId": 100,
            "user": {
                "id": 63,
                "username": "eburras1q"
            }
        },
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
            "id": 4,
            "body": "Wow! You have improved so much!",
            "postId": 8,
            "user": {
                "id": 19,
                "username": "bleveragei"
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
     ]);
    }) 
    it('sortByUsername function  testing ',()=>{
        expect(sortByUsername({comments:mockData})).toEqual([
            {
                "id": 4,
                "body": "Wow! You have improved so much!",
                "postId": 8,
                "user": {
                    "id": 19,
                    "username": "bleveragei"
                }
            },{
            "id": 1,
            "body": "This is some awesome thinking!",
            "postId": 100,
            "user": {
                "id": 63,
                "username": "eburras1q"
            }
        },
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
            "id": 3,
            "body": "You are an amazing writer!",
            "postId": 61,
            "user": {
                "id": 29,
                "username": "jissetts"
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
        }
        ]);
    }) 
    it('sortByUserid function  testing ',()=>{
        expect(sortByUserid({comments:mockData})).toEqual([
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
        },{
            "id": 4,
            "body": "Wow! You have improved so much!",
            "postId": 8,
            "user": {
                "id": 19,
                "username": "bleveragei"
            }
        }
        ]);
    })

    it('sortByPostId function  testing ',()=>{

        expect(sortByPostid({comments:mockData})).toEqual([{
            "id": 4,
            "body": "Wow! You have improved so much!",
            "postId": 8,
            "user": {
                "id": 19,
                "username": "bleveragei"
            }
        },{
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
    },
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
        "id": 1,
        "body": "This is some awesome thinking!",
        "postId": 100,
        "user": {
            "id": 63,
            "username": "eburras1q"
        }
    }
]);

    
    })

})  