import React, { useState } from 'react'
import memesData from '../memesData'


function Meme() {

  const [meme, setMeme] = useState({topText: "", bottomText: "", randomImage: "http://i.imgflip.com/1bij.jpg"})
  const [allMemeImages, setAllMemeImages] = useState(memesData)
  
  function getMemeImage(e) {
    e.preventDefault()
    const memesArray = allMemeImages.data.memes
    const memeImage = memesArray[Math.floor(Math.random()*memesArray.length)];
    setMeme(prevState => {
      return {
        ...prevState,
        randomImage: memeImage.url 
      }
    })
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
      <img src={meme.randomImage} id="meme-image" />
    </main>
  )
}

export default Meme