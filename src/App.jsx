import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./sections/Navbar"
import { useState } from "react"


function App() {
  const [onClick, setOnclick] = useState(false)
  return (
    <>
     <Routes>
      <Route path="/" element={ <Home onClick={onClick} setOnclick={setOnclick}/>} />
      <Route path="/about" element={<About onClick={onClick} setOnclick={setOnclick}/>} />
      <Route path="/contact" element={<Contact onClick={onClick} setOnclick={setOnclick}/>} />
     </Routes>

      {/* <Home /> */}
     {/* <About /> */}
    </>
  )
}

export default App
