import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import CanvasMap from './page/canvas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p onClick={() => setCount(2)}>Hello Vite + React!</p>
        <p>production： {import.meta.env.VITE_TEMP}</p>
        <p>release {import.meta.env.VITE_TEMP}</p>
        <p>development： {import.meta.env.VITE_TEMP}</p>
        {count === 0 && <CanvasMap value={'ss'} />}
      </header>
    </div>
  )
}

export default App
