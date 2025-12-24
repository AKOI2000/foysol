import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./sections/Navbar"
import { useState } from "react"


function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
     </Routes>

      {/* <Home /> */}
     {/* <About /> */}
    </>
  )
}

export default App
