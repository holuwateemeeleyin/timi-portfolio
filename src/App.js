import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import Projects from './Pages/Projects'

function App() {
  
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false)
    }, 2000)
    return()=> clearTimeout(timer)
  }, [])

  if (loading){
    return <div className='loading'></div>
  }
  return (
    <Layout className='app'>
      <Routes>
        <Route path='/' element={<Home/>}
        />
        <Route exact path='/projects' element={<Projects/>} />
      </Routes>
    </Layout>
  );
}

export default App;