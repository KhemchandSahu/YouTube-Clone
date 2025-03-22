import React from 'react'
import Home from '../assets/home.png'
import Shorts from "../assets/shorts2.png"
import Subs from "../assets/subscriptions.png"
import History from "../assets/history3.png"
import Playlist from "../assets/library.png"
import Watch from "../assets/watch2.png"
import Liked from "../assets/like.png"
import Explore from "../assets/explore.png"
import Shop from "../assets/shop2.webp"
import Music from "../assets/music.png"
import Movie from "../assets/entertainment.png"
import Live from "../assets/live2.png"
import Game from "../assets/game_icon.png"
import News from "../assets/news.png"
import Sports from "../assets/sports.png"
import Tech from "../assets/tech.png"
import Blogs from "../assets/blogs.png"
import Auto from "../assets/automobiles.png"





import './Sidebar.css'

const Sidebar = ({ mclick,category,setCategory }) => {



  return (
    <>
        <nav className={(mclick) ? "sidebar active" : "sidebar"}>
            <div className={category===0?"activeCate":""} onClick={()=>setCategory(0)} >
                <img src={Home} alt="home" />
                <p>Home</p>
            </div>
            {/* <div className={category===42?"activeCate":""}  onClick={()=>setCategory(42)}>
                <img src={Shorts} alt="srts" />
                <p>Shorts</p>
            </div> */}
            {/* <div className="subscriptions">
                <img src={Subs} alt="sbcn" />
                <p>Subscription</p>
            </div> */}
            <hr />

            
            <h4>Explore</h4>
            
            <div className={category===28?"activeCate":""}  onClick={()=>setCategory(28)}>
                <img src={Tech} alt="spng" />
                <p>Technology</p>
            </div>
            <div className={category===10?"activeCate":""}  onClick={()=>setCategory(10)}>
                <img src={Music} alt="msc" />
                <p>Music</p>
            </div>
            
            <div className={category===22?"activeCate":""} onClick={()=>setCategory(22)}>
                <img src={Blogs} alt="lv" />
                <p>People & Blog</p>
            </div>
            <div className={category===20?"activeCate":""} onClick={()=>setCategory(20)}>
                <img src={Game} alt="gmng" />
                <p>Gaming</p>
            </div>
            <div className={category===25?"activeCate":""}  onClick={()=>setCategory(25)}>
                <img src={News} alt="nw" />
                <p>News</p>
            </div>    
            <div className={category===17?"activeCate":""} onClick={()=>setCategory(17)}>
                <img src={Sports} alt="sprts" />
                <p>Sports</p>
            </div>
            <div className={category===24?"activeCate":""} onClick={()=>setCategory(24)}>
                <img src={Explore} alt="tndg" />
                <p>Entertainment</p>
            </div>
            <div className={category===2?"activeCate":""}  onClick={()=>setCategory(2)}>
                <img src={Auto} alt="mv" />
                <p>Auto & Vehicle</p>
            </div>
            <hr />

            <h4>You</h4>
            <div className="history">
                <img src={History} alt="hstr" />
                <p>History</p>
            </div>
            <div className="Playlist">
                <img src={Playlist} alt="plst" />
                <p>Playlists</p>
            </div>
            <div className="watch">
                <img src={Watch} alt="wtch" />
                <p>Watch later</p>
            </div>
            <div className="liked">
                <img src={Liked} alt="lkd" />
                <p>Liked videos</p>
            </div>
            <div className="subscriptions">
                <img src={Subs} alt="sbcn" />
                <p>Subscription</p>
            </div>
            <hr />

        </nav>
      
    </>
  )
}

export default Sidebar
