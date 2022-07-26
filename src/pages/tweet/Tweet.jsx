import React, { useState } from 'react'
import "./tweet.css";
import axios from "axios";


function Tweet() {

    const [user, updateUser] = useState("")
    const [tweetId, updateTweetId] = useState("")
    const [tweetTitle, updateTweetTitle] = useState("")
    const [tweetText, updateTweetText] = useState("")
    const [tweetPicture, updateTweetPicture] = useState("")

    // function to post tweet to DB on server
    function postTweet() {
        if (tweetText.length > 0) {
            const newTweetObject = {
                id: tweetId,
                title: tweetTitle,
                tweetPic: tweetPicture,
                text: tweetText,
                author: user
            }
            axios.post("http://localhost:3001/posts", newTweetObject)
                .then(() => { alert("object has been posted") })

        } else {
            alert("please enter a tweet")
        }
    }
    return (
        <div className='write'>
            <img className="writeImg" src="https://images.pexels.com/photos/327394/pexels-photo-327394.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
            />
            <br />
            <div>
                <input className='user'
                    type="text"
                    placeholder='enter username'
                    onChange={(e) => updateUser(e.target.value)}
                />
                <input className='tweetpics'
                    type="text"
                    placeholder='Enter your tweet image Url'
                    onChange={(e) => updateTweetPicture(e.target.value)}
                />
            </div>


            <form className="writeForm" >

                <div className="writeFormGroup">


                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                    />

                    <input
                        type="text"
                        placeholder="Post ID"
                        className="writeInputId"
                        autoFocus={true}
                        onChange={(e) => updateTweetId(e.target.value)}

                    />

                    <input
                        type="text"
                        placeholder="Title"
                        className="writeInputTitle"
                        autoFocus={true}
                        onChange={(e) => updateTweetTitle(e.target.value)}
                    />
                </div>

                <div className="writeFormGroup">
                    <textarea
                        className="writeText writeInput"
                        id='input'
                        placeholder="Tell your story.."
                        type="text"
                        onChange={(e) => updateTweetText(e.target.value)}
                    >

                    </textarea>
                </div>
                <button id="post-button" onClick={() => postTweet()} className="writeSubmit" type="submit">Post</button>
            </form>
        </div>

    )
}

export default Tweet