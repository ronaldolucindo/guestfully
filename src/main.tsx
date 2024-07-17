import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/layout/layout'
import Bookings from './pages/bookings/bookings'
import CreateBooking from './pages/create-booking/create-booking'
import NotFound from './pages/not-found/not-found'
import './index.css'
import 'react-image-gallery/styles/css/image-gallery.css'
import 'react-datepicker/dist/react-datepicker.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Bookings />} />
          <Route path="create-booking" element={<CreateBooking />} />
          <Route
            path="edit-booking/:bookingId"
            element={<CreateBooking booking="1" />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
