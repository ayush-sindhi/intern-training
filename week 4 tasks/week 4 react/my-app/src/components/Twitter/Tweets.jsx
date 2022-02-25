import React, { useState } from 'react';
import Tweet from './Tweet';
 
const Tweets = () => {
    const [tweets,setTweets]=useState(
        [
            {
                id:1,
                dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8aeyZFg7p0QJ8RPF-RUBV3vrRA9qTpYSAXQ&usqp=CAU",
                name:"Elon Musk",
                twitterhandle:"@muskdon",
                tweet:"Tesla, SpaceX ka maalik hu mai",
                likes:0
            },{
                id:2,
                dp:"https://frontpagelive.com/wp-content/uploads/2020/02/FACEBOOK-SIZE-59.jpg",
                name:"Jeff Bezos",
                twitterhandle:"@jeffy",
                tweet:"Amazon ka maalik hu mai",
                likes:0
            },
            {
                id:3,
                dp:"https://wallpapercave.com/wp/wp6910777.jpg",
                name:"Mukesh Ambani",
                twitterhandle:"@imambani",
                tweet:"Jio, Reliance ka maalik hu mai",
                likes:0
            },
            {
                id:4,
                dp:"https://i.ndtvimg.com/i/2016-02/gautam-adani_650x400_41454499737.jpg",
                name:"Gautam Adani",
                twitterhandle:"@gautiya",
                tweet:"Fortune, Adani group ka maalik hu mai",
                likes:0
            }
   
        ]
    );
    // Like Function
    const handleInc=(id)=>{
        const latestState=[...tweets];
        const index=tweets.findIndex(el=>el.id===id);
        latestState[index].likes+=1
        setTweets(latestState);
    }
    const handleDec=(id)=>{
        const latestState=[...tweets];
        const index=tweets.findIndex(el=>el.id===id);
        if(latestState[index].likes>0){
            latestState[index].likes-=1
        }
       
        setTweets(latestState);
    }
    const renderTweets=()=>{
        return tweets.map(item=>{
            return <Tweet tweet={item} handleInc={handleInc} handleDec={handleDec}/>
        })
    }
  return (
    <>
     {renderTweets()}
    </>
  )
}
 
export default Tweets
