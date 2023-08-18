import React from 'react'
import troll from "../assets/troll-face.png"
export default function Header() {
  return (
    <header className='nav-bar'>
        <img src={troll} id='logo'/>
        <h1 className='main-header'>Meme generator</h1>
    </header>
  )
}
