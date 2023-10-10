import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './pages/App/App'
import { Post } from './pages/Post/Post'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/post/:PostTitle" element={<Post />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
