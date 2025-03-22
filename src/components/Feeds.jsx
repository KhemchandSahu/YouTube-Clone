import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import moment from "moment"
import axios from 'axios'
import T1 from "../assets/thumbnail1.png"
import T2 from "../assets/thumbnail2.png"
import T3 from "../assets/thumbnail3.png"
import T4 from "../assets/thumbnail4.png"
import T5 from "../assets/thumbnail5.png"
import T6 from "../assets/thumbnail6.png"
import T7 from "../assets/thumbnail7.png"
import T8 from "../assets/thumbnail8.png"
import pic from "../assets/user_profile.jpg"
import './Feeds.css'
import { API_KEY, numToWords } from './Data'

const Feeds = ({mclick, category, setCategory}) => {

    const [data, setData] = useState([]);

    const fetchData = async () =>{
        const videoList_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
        // console.log(videoList_url);
        await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items))
    }
    

    useEffect(()=>{
        fetchData();
    },[category])

  return (
    <>
        <div className={(mclick)?"feeds-large":"feeds"}>
            {data?data.map((item,index)=>{
                // if(item.contentDetails.duration.length>5)
                return(
                    <Link to={`videoPage/${item.snippet.categoryId}/${item.id}`} className='feed'>
                        {/* <div className="feed"> */}
                            <div className="thumbnail">
                                <img src={item.snippet.thumbnails.standard.url} alt="t1" />
                            </div>
                            <div className="title">
                                <div className="profilePic">
                                    {/* <img src={pic} alt="pic" /> */}
                                </div>
                                <div className="info">
                                    <div className="titleDiv">
                                        <h3>{item.snippet.title}</h3>
                                    </div>
                                    <p>{item.snippet.channelTitle}</p>
                                    <p>{numToWords(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()} </p>
                                </div>
                            </div>
                        {/* </div> */}
                    </Link>
                )
            }):"This category is not available :)"}
        </div>
    </>
  )
}

export default Feeds
