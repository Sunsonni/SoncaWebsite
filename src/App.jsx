import { useState } from 'react'
import soncaLogo from './assets/SoncaLogo.png'
import './App.css'
import { Outlet } from 'react-router-dom' 
import PaintWindow from './components/PaintWindow'
import NotePad from './components/NotePad'
import SocialMediaLinks from './components/SocialMediaLinks'
import AudioPlayer from './components/AudioPlayer'

function App() {
  return (
    <div className='container'>
       <img className='title' src={soncaLogo} alt="Website Logo"/>
        <SocialMediaLinks className="links"/>
        <AudioPlayer className="audio"/>
        <NotePad className="notepad"/>
        <PaintWindow className="paint-window"/>
    </div>
  )
}

export default App;
