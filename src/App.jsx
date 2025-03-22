import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar'
import Home from './components/Home'
import VideoPage from './components/VideoPage'

function App() {
  const [mclick, setmclick] = useState(false)


    // const changeMclick =()=>{
    //   if((!mclick)&&(window.innerWidth<1200)){
    //     setmclick(true);
    //   }
    // }

    // window.addEventListener("resize", changeMclick);
  

  const menuClick = () => {
    setmclick(!mclick)
    // console.log(mclick)
  }

  return (
    <>
      <Router>
        <Navbar menuClick={()=>menuClick()}/>

        <Routes>
          <Route path='/' element={<Home mclick={mclick}/>}/>
          <Route path='/videoPage/:cid/:id' element={<VideoPage/>}/>
          {/* <Route path='/' element={<Home/>}/> */}


          
        </Routes>
      </Router>
      {/* <Home mclick={mclick}/> */}
      {/* <VideoPage/> */}
    </>
  )
}

export default App
