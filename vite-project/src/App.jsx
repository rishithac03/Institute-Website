import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Collaborations from './pages/Collaborations'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Jobs from './pages/Jobs'
import Resources from './pages/Resources'
import Register from './pages/Register'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </>
  )
}

export default App
