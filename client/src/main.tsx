import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ViewAllUsers from './views/viewAllUsers'
import AddUser from './views/addUser'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewAllUsers />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
