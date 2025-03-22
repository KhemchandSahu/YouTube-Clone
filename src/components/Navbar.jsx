import React from 'react'
import { Link } from 'react-router-dom';
import Search from "../assets/search.png";
import Ytlogo from "../assets/ytlogo2.png";
import Menu from "../assets/menu2.png";
import Voice from "../assets/voice.svg";
import Upload from "../assets/plus2.png";
import Bell from "../assets/notification.png";
import K from "../assets/k.png";
import './Navbar.css'



const Navbar = ({menuClick}) => {
  return (

    <>
        <nav className="navbar">
            <div className="left-nav">
                <div className="menu" onClick={() => {menuClick()}}>
                    <img src={Menu} alt="" />
                </div>
                {/* <div className="logo"> */}
                    <Link to="/" className='logo'>
                        <img src={Ytlogo} alt="ytlgo" />
                        <h3>YouTube</h3>
                    </Link>
                {/* </div> */}
                

            </div>
            <div className="mid-nav">
                <div className="search">
                    <input type="text" placeholder="search" />
                    <img src={Search} alt="srch" />
                </div>
                    <div className="voice">
                        <img src={Voice} alt="voic" />
                    </div>

            </div>
            <div className="right-nav">
                <div className="create-icon">
                    <img src={Upload} alt="upld" />
                    <p className="create-text">Create</p>

                </div>
                <div className="bell">
                    <img src={Bell} alt="ntfcn" />
                </div>
                <div className="profile-icon">
                    <img src={K} alt="prfl" />
                </div>
            </div>
        </nav>
      
    </>
  )
}

export default Navbar
