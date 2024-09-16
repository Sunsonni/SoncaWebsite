import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import soncaLogo from '../../Content/SoncaLogo.svg'
import './App.css'
import { Outlet } from 'react-router-dom' 
import PaintWindow from './components/paintWindow'
import NotePad from './components/NotePad'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <img className='title' src={soncaLogo} alt="Website Logo"/>
        <NotePad />
        <PaintWindow />
       {/* <Outlet /> */}
    </>
  )
}

export default App;
