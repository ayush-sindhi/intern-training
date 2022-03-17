import { combineReducers } from "redux";

const initState=[{Blogtitel:"Title1",
    Id:1,
    Likes:0,
    Comment:[ {
    Date:"1/3/2022",
    Comment:"Comment text1",
    catogery:'demo',
    commentby:"Ram"
    }]
    },
    {Blogtitel:"Title2",
        Id:2,
        Likes:0,
        Comment:[ {
        Date:"2/3/2022",
        Comment:"comment text2",
        catogery:'demo',
        commentby:"sham"
        }]
        },
        {Blogtitel:"Title3",
            Id:3,
            Likes:0,
            Comment:[ {
            Date:"3/3/2022",
            Comment:"comment text3",
            catogery:'demo',
            commentby:"harpreet"
            }]
    }]

export const CardsReducer=(state=initState,action)=>{
    switch(action.type)
    { 
        case("ADD"):
     {
         return [...state,action.payload]}
    case("LIKE"):
         {
             state.forEach(item=>{
                 if(item.Id===action.payload)
                 {
                     item.Likes=item.Likes+1;
                     console.log(item)
                 }
             })
             return state}
        default:
            return state;
    }
}

export const rootreducer=combineReducers({
    Cards:CardsReducer
});
