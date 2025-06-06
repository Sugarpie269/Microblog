import React from 'react'
import HomePage from './pages/home/HomePage'


function App() {
  const user = {username:"Navya"};

  return (
    <div>
      <HomePage user = {user}/>
    </div>
  )
}

export default App
