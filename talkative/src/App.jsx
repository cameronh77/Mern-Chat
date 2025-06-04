import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-100vh flex'>
      <Routes>
        <Route path = '/' Component={HomePage}/>
        <Route path = '/chats' Component={ChatPage}/>
      </Routes>
    </div>
  )
}

export default App
