import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const handleKeyDown = (e) => {
	if (e.key === 'W' || e.key === 'ArrowUp'){
		console.log('hit')
		//emit code
	}
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div onKeyDown={handleKeyDown} >

    </div>
  )
}

export default App
