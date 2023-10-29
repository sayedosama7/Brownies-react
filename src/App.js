import React, { useEffect, useState } from 'react'
import HomePage from './Components/HomePage'
import { GridLoader } from 'react-spinners';

function App() {
  const [loading, setLoading] = useState([false]);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <div>
      {loading ?
        <div className="loader">
          <GridLoader color={'#663a2a'} size={50} speedMultiplier={1} />
        </div> :
        <HomePage />
      }
    </div>
  )
}


export default App