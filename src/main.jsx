import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import About from './pages/AboutPage.jsx'
import Contact from './pages/ContactPage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
// import Resume from './pages/ResumePage.jsx'

const router = createBrowserRouter([
  { path: '/', 
  element: <App />, 
  children: [
    { index: true, element: <About /> },
     { path: 'contact', element: <Contact /> }, 
     { path: 'portfolio', element: <PortfolioPage /> },
      // { path: 'resume', element: <Resume /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
