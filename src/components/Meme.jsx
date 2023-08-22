import React, { useState } from 'react'
import memesData from '../memesData'


function Meme() {

  const [memeData, setMemeData] = useState(
    {
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  const [allMemeImages, setAllMemeImages] = useState(memesData)
  
  function getMemeImage(e) {
    e.preventDefault()
    const memesArray = allMemeImages.data.memes
    const memeImage = memesArray[Math.floor(Math.random()*memesArray.length)];
    setMemeData(prevState => {
      return {
        ...prevState,
        randomImage: memeImage.url 
      }
    })
  }

  function handleChange(event) {
    const {name, type, value} = event.target
    setMemeData(prevMeme => {
      return {
      ...prevMeme,
      [name]: value
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
          name="topText" 
          value={memeData.topText}
          onChange={handleChange}
        />
        <input 
          type="text" 
          className='form--input'
          placeholder='bottom text'
          name="bottomText"
          value={memeData.bottomText}
          onChange={handleChange}
        />
        <button 
          className='form--button' onClick={getMemeImage}
        >
          Get a new meme image 🏞️
        </button>
      </form>
      <div className="meme">
                <img src={memeData.randomImage} className="meme--image" />
                <h2 className="meme--text top">{memeData.topText}</h2>
                <h2 className="meme--text bottom">{memeData.bottomText}</h2>
        </div>
    </main>
  )
}

export default Meme