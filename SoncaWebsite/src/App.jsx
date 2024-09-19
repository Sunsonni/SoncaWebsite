import { useState } from 'react'
import soncaLogo from '../../Content/SoncaLogo.svg'
import './App.css'
import { Outlet } from 'react-router-dom' 
import PaintWindow from './components/paintWindow'
import NotePad from './components/NotePad'
import SocialMediaLinks from './components/SocialMediaLinks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <img className='title' src={soncaLogo} alt="Website Logo"/>
        <SocialMediaLinks />
        <NotePad />
        <PaintWindow />
       {/* <Outlet /> */}
    </>
  )
}

export default App;
