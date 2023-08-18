import React, { useState } from 'react'
import memesData from '../memesData'
function Meme() {
  const [memeImage, setMemeImage] = useState("")
  function getMemeImage(e) {
    const memesArray = memesData.data.memes
    e.preventDefault()
    const meme = memesArray[Math.floor(Math.random()*memesArray.length)];
    setMemeImage(meme.url)
  }  
  return (
    <main>
      <form className="form" action="">
        <input 
          type="text" 
          className='form--input'
          placeholder='top text' 
        />
        <input 
          type="text" 
          className='form--input'
          placeholder='bottom text'
        />
        <button 
          className='form--button' onClick={getMemeImage}
        >
          Get a new meme image 🏞️
        </button>
      </form>
      <img src={memeImage} id="meme-image" />
    </main>
  )
}

export default Meme