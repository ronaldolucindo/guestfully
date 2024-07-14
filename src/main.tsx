import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './index.css'
import Layout from './components/layout/layout'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<p>Home component</p>} />
          <Route
            path="create-booking"
            element={<p>Create booking component</p>}
          />
          <Route
            path="edit-booking/:bookingId"
            element={<p>Edit booking component</p>}
          />
          <Route path="*" element={<p>Not found component</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
