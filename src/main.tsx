import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter, Link, Outlet } from 'react-router-dom'
import './index.css'

// TODO: Move this to its own file and add proper styling
function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create-booking">About</Link>
          </li>
          <li>
            <Link to="/edit-booking/1">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  )
}

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
