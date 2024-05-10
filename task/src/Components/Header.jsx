import React from 'react'
import { Link } from 'react-router-dom'
import './css/header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link style={{ color: 'white', padding: '12px 18px', display: 'inline-block', textDecoration: 'none', fontSize: '22px', marginLeft: '50px' }} to='/'>RESTAURANT</Link>
            <Link className='link' style={{ color: 'white', padding: '12px 18px', display: 'inline-block', textDecoration: 'none', fontFamily: 'sans-serif', marginLeft: '150px' }} to='/about'>About</Link>
            <Link className='link' style={{ color: 'white', padding: '12px 18px', display: 'inline-block', textDecoration: 'none', fontFamily: 'sans-serif' }} to='/contact'>Contact</Link>
        </div>
    )
}

export default Header