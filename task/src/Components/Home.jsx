import React from 'react'
import './css/home.css'
import { Link } from 'react-router-dom'

const Home = ({restaurants ,setCount}) => {


  return (
    <div className='container'>{
      restaurants.map(({ image }, i) => {
        return <Link onClick={() => setCount(i)} to='/restaurantMenu'><div key={i} className='card'>
          <img className='cardImg' src={image} />
        </div></Link>
      })
    }</div>
  )
}

export default Home