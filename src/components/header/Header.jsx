import React from 'react'
import "./header.css"

function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">

        <span className='headerTitleSm'>Welcome to </span>
        <span className='headerTitleLg'>IDBlog</span>

      </div>

      <img
        className='headerImg'
        src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="" />
    </div>
  )
}

export default Header;