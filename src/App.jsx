import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <>
      <div className="font-jura">
        <Navbar />
        <Home />
      </div>
    </>
  )
}

export default App
