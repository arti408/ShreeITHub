
import Navbar from './components/Navbar'
import Home from './components/Home'
import Aboutus from './components/Aboutus'
import Services from './components/Services'
import Contact from './components/Contactus'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/aboutus' element={<Aboutus />}></Route>
      <Route path='/services' element={<Services />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App