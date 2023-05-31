import { useState } from 'react'
import { card } from './data/data'
import Card from './components/Card'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Card {...card} />
    </div>
  )
}

export default App
