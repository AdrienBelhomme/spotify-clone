import React from 'react'
import {Link} from "react-router-dom";

const Home = () => {

  return (
    <div>Home
    <Link to="./Artists/"><button >Artists</button></Link>
    <Link to="./Albums/"><button >Albums</button></Link>

    </div>

  )
}

export default Home
