// import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Page from './pages/index'
import './App.css'
import {useLocation} from 'react-router-dom'

function App() {
  const currentPage = useLocation().pathname;
 

  return (
    <>
      <Header/>
      
     <Page currentPage = {currentPage}/>
     
      <Footer/>
    </>
  )
}

export default App
