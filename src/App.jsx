import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./Component/Footer"
import Home from "./Component/Home"
import Navbar from "./Component/Navbar"
import Pricing from "./Component/Pricing"

function App() {

  return (
    <BrowserRouter>
       <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Pricing" element={ <Pricing />} />
    </Routes>
       <Footer />
    </BrowserRouter>
  )
}

export default App
