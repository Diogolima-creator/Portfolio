import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './pages/App/App'
import { Post } from './pages/Post/Post'
import { RoadMap } from './pages/RoadMap/RoadMap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/:content?" element={<App />}/>
        <Route path="/post/:PostTitle" element={<Post />}/>
        <Route path="/roadMap" element={<RoadMap />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
