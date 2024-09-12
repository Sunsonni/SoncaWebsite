import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import soncaLogo from '../../Content/SoncaLogo.svg'
import './App.css'
import { Outlet } from 'react-router-dom' 
import PaintWindow from './components/paintWindow'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <img src={soncaLogo} alt="Website Logo"/>
       <h1>hello</h1>
      <PaintWindow />
       <Outlet />
    </>
  )
}

export default App;