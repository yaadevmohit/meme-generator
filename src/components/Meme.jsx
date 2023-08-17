import React from 'react'

function Meme() {

  function handleSubmit(e) {
    e.preventDefault()
  }  
  return (
    <main>
      <form className="form" action="">
        <input 
          type="text" 
          className='form--input' 
        />
        <input 
          type="text" 
          className='form--input'
        />
        <button 
          className='form--button'
        >
          Get a new meme image 🏞️
        </button>
      </form>
    </main>
  )
}

export default Meme