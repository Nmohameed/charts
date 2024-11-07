import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chart from './components/Chart'

function App() {

  return (
    <>
      <div className="reactApp">
        <h1>Feed News - Chart Tool</h1>
          <Chart/>
      </div>
    </>
  )
}

export default App
