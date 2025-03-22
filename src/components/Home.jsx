import React from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar'
import Feeds from './Feeds'

import './Home.css'

const Home = ({mclick}) => {
  const [category, setCategory] = useState(0);

  return (
    <div className="home">
        <Sidebar mclick={mclick} category={category} setCategory={setCategory}/>
        <Feeds mclick={mclick} category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
