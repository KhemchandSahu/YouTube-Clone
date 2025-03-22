import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Pic from "../assets/user_profile.jpg"
import Like from "../assets/like.png"
import Dislike from "../assets/dislike.png"
import Share from "../assets/share.png"
import Save from "../assets/save4.png"
import More from "../assets/more.webp"
import { API_KEY, numToWords } from './Data'
import moment from 'moment'
import './VideoPage.css'

const VideoPage = () => {

    const [api, setApi] = useState(null);
    const [channel, setChannel] = useState(null);
    const [comment, setComment] = useState([]);
    const [reco, setReco] = useState([]);

    // const {vid} = useParams();
    const {cid} = useParams();

    const {id} = useParams();

    console.log(id,cid)

    const fetchCurrent = async () => {
        
        const currentVideo =`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${id}&key=${API_KEY}`
        await fetch(currentVideo).then(response=>response.json()).then(data=> setApi(data.items[0]))


   }

    const fetchChannel = async () => {
        const currentChannel = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${api.snippet.channelId}&key=${API_KEY}`
        await fetch(currentChannel).then(response=>response.json()).then(data=> setChannel(data.items[0]));

        const comment = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${id}&key=${API_KEY}`
        await fetch(comment).then(response=>response.json()).then(data=> setComment(data.items));

        const recommended = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${cid}&key=${API_KEY}`;
        await fetch(recommended).then(response=>response.json()).then(data=> setReco(data.items));

   }

    useEffect(() =>{
        fetchCurrent();

    },[id]);

    useEffect(() =>{
        if(api){
            fetchChannel();

        }

    },[api]);


  return (
    <div className='videoPage'>
      <div className="vp-extra">
      <div className="pageContainer">
        <div className="videoContainer">
          {/* <video src={Sample} controls autoPlay muted></video>
           */}
           
           <iframe src={`https://www.youtube.com/embed/${id}?autoplay=1`}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className="videoTitle"><h3>{api?api.snippet.title:"NO TITLE"}</h3></div>
        <div className="channelDiv">
          <div className="channelInfo">
            <img src={channel?channel.snippet.thumbnails.default.url:null} alt="" className="channelPic" />
            <div className="channelName">
              <h4>{api?api.snippet.channelTitle:""}</h4>
              <p>{channel?numToWords(channel.statistics.subscriberCount):""} Subscribers</p>
            </div>
            <button className="subscribe">Subscribe</button>
          </div>
          <div className="reaction">
            <div className="likeDislike">
              <div className="like">
                <img src={Like} alt="like" />
                <h4> {api?numToWords(api.statistics.likeCount):"0"}</h4>
              </div>
              <div className="dislike">
                <img src={Dislike} alt="dis" />
              </div>
            </div>
            <div className="share">
              <img src={Share} alt="share" />
              <h4>Share</h4>
            </div>
            <div className="download">
            <img src={Save} alt="share" />

              <h4>Save</h4>
            </div>
            <div className="more">
              <img src={More} alt="more" />
              {/* <h4>More</h4> */}
            </div>
          </div>
        </div>
        <div className="description">
            <p>{api?numToWords(api.statistics.viewCount):"No views"} views &bull; {api?moment(api.snippet.publishedAt).fromNow():" "} </p>
            <br />
            <p>{api?api.snippet.description.slice(0,350)+"...more":""}</p>
        </div>
        <div className="comments">
            <h4>{api?api.statistics.commentCount:"No"} Comments</h4>
            <div className="addComment">
                <img src={Pic} alt="" />
                <div>
                    <p>Add a comment...</p>
                    <hr />
                </div>
            </div>

            {comment.map((item,index)=>{
                return(
                    <div key={index} className="comment">
                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                        <div>
                            <h5>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>{moment(item.snippet.topLevelComment.snippet.updatedAt).fromNow()}</span></h5>
                            <p>{item.snippet.topLevelComment.snippet.textDisplay.slice(0,400)+" "}</p>
                            <div className="likedis">
                                <img src={Like} alt="" className="likes" />
                                <p>{numToWords(item.snippet.topLevelComment.snippet.likeCount)}</p>
                                <img src={Dislike} alt="" />
                            </div>
                        </div>
                    </div>
                )

            })}

          
           
            <h4 className='loadMore'>...Load more</h4>
            
        </div>
      </div>
      </div>
      <div className="vp-feeds">
        <div className="vp-feeds-extra">
            {reco?reco.map((item,index)=>{
                return(
                <Link to={`../videoPage/${item.snippet.categoryId}/${item.id}`} key={index} className="vp-feed">
                    <img src={item.snippet.thumbnails.medium.url} alt="t1" />
                    <div className="vp-title">
                        {/* <div className="profilePic">
                            <img src={Pic} alt="Pic" />
                        </div> */}
                        <div className="vp-info">
                            <h3>{item.snippet.title.slice(0,80)+" "}</h3>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{numToWords(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                        </div>
                    </div>
                </Link>
                )
            }):''}
                        
        </div>
      </div>
      
    </div>
  )
}

export default VideoPage
