import React from 'react'
import { Link } from 'react-router-dom';

import "./topbar.css"

function Topbar() {


  return (
    <div className='top'>
      <div className="top-left">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="top-center">
        <ul className='top-center-list'>

          <li className='top-center-list-item'><Link className='link' to="/tweethpg" >TWEETSHome</Link></li>
          <li className='top-center-list-item'><Link className='link' to="/tweet" >NEWTWEET</Link></li>
          <li className='top-center-list-item'><Link className='link' to="/about" >ABOUT</Link></li>
        </ul>
      </div>
      <div className="top-right">



        <img
          className='topImg'
          src="https://images.pexels.com/photos/3755021/pexels-photo-3755021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="profilepics"
        />

        <ul className='top-center-list'>
          <li className='top-center-list-item'>
            <Link className='link' to="/login" >LOGIN</Link>
          </li>

          <li className='top-center-list-item'>
            <Link className='link' to="/register" >REGISTER</Link>
          </li>

        </ul>




        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}

export default Topbar;