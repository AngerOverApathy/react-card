import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container'>
    <Header />
    <MainContent />
    <Footer />
  </div>,
)
