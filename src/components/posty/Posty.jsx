import React from 'react'
import "./posty.css"

function Posty({ post }) {
  return (
    <div className='post'>

      <img
        className="postImg"
        src={post.tweetPic}
        alt=""
      />
          
      <p>{post.title}</p>
      
      <p>Author: {post.author}</p>
      <p className='postDesc'>
            {post.text}
        </p>

    </div>
  )
}

export default Posty;