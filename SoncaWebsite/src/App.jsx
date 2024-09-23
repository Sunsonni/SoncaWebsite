import { useState } from 'react'
import soncaLogo from '../dist/Content/SoncaLogo.svg'
import './App.css'
import { Outlet } from 'react-router-dom' 
import PaintWindow from './components/paintWindow'
import NotePad from './components/NotePad'
import SocialMediaLinks from './components/SocialMediaLinks'
import AudioPlayer from './/components/AudioPlayer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <img className='title' src={soncaLogo} alt="Website Logo"/>
        <SocialMediaLinks className="links"/>
        <NotePad className="notepad"/>
        <PaintWindow />
        <AudioPlayer/>
    </>
  )
}

export default App;
