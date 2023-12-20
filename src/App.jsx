import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import State from './components/State'
import FetchData from './components/FetchData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FetchData />
      {/* <State></State> */}
    </>
  )
}

export default App
