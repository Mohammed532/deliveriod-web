import { useState, useEffect } from 'react'
import socketIO from 'socket.io-client'
import Home from './pages/Home.jsx'
import './App.css'

const socket = socketIO.connect('http://localhost:3030')

function App() {
  return (
    <>
      <Home socket={socket} />
    </>
  )
}

export default App
