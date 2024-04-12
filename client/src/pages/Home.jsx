import React from 'react'
import { useState, useEffect } from 'react'
import VideoStreamer from './../components/VideoStreamer.jsx'


function Home({socket}) {

    const handleKeyDown = (e) => {
        if (e.key === 'w' || e.key === 'ArrowUp'){
            console.log('forward')
            socket.emit('forward', {
		sid: `${socket.id}`,
	    })
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
    })
  
    return(
        <div className="home">
            {/* <VideoStreamer /> */}
            <h2>Use Arrows/WASD to control robot</h2>
        </div>
    )
}

export default Home
