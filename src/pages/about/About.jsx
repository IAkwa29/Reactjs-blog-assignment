import React, { useState } from 'react'
import "./about.css"
import { useEffect } from "react"

function About() {

  const [post, setPosts] = useState([])


  function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setPosts(json))
  }


  useEffect(() => {

    getPosts();

  })
  return (
    <div className='about'>
      <h1>About IDBlog</h1>

      <ol>
        {post.map((item) =>
          <li className='list' key={item.id}>
            <div>
              <p>{item.title}</p>
            </div>
          </li>

        )

        }
      </ol>


    </div>
  )
}

export default About;