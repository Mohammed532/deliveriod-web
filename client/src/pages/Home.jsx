import React from 'react'
import { useState, useEffect } from 'react'
import VideoStreamer from './../components/VideoStreamer.jsx'


function Home({socket}) {

    const handleKeyDown = (e) => {
        if (e.key === 'w' || e.key === 'ArrowUp'){
            socket.emit('forward', {
                sid: `${socket.id}`,
            })
        }
        if (e.key === 's' || e.key === 'ArrowDown'){
            socket.emit('backward', {
                sid: `${socket.id}`,
            })
        }
        if (e.key === 'a' || e.key === 'ArrowLeft'){
            socket.emit('left', {
                sid: `${socket.id}`,
            })
        }
        if (e.key === 'd' || e.key === 'ArrowRight'){
            socket.emit('right', {
                sid: `${socket.id}`,
            })
        }
    }
    
    const handleKeyUp = (e) => {
        let keys = ['w', 'a', 's', 'd', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight']

        if(keys.includes(e.key)){
            socket.emit('stop', {
                sid:`${socket.id}`
            })
        }
    }


    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)
    })
  
    return(
        <div className="home">
            {/* <VideoStreamer /> */}
            <h2>Use Arrows/WASD to control robot</h2>
        </div>
    )
}

export default Home
