import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar"

import About from "./pages/about/About";
import './App.css';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Tweet from './pages/tweet/Tweet';
import Homepg from './pages/tweetHome/Homepg';
import axios from "axios"

function App() {

  const [post, setPosts] = useState([])
  const [tweets, setTweets] = useState([])


  function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setPosts(json))
  }

  async function getTweets() {

    await axios.get("http://localhost:3001/posts").then((respose) => {
      setTweets(respose.data)
    })

  }
  // this reloads info from backend on browser load or rerendering

  useEffect(() => {

    getPosts();
    getTweets();

  }, [])
  // this displays loading data pls wait on screen as browser retrives data from backend
  if (post.length === 0) {
    return (
      <div>
        <h1>Loading data....please wait</h1>
      </div>
    )
  }
  return (
    <div className="App">

      <Topbar />

      <Routes>

        <Route path="/" element={<Homepg tweets={tweets} />} />

        <Route path="/about" element={<About posts={post} />} />

        <Route path="/tweet" element={<Tweet />} />

        <Route path="/tweethpg" element={<Homepg tweets={tweets} />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />


      </Routes>



    </div>
  );
}

export default App;
