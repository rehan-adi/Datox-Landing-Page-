import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./Component/Footer"
import Home from "./Component/Home"
import Navbar from "./Component/Navbar"
import Pricing from "./Component/Pricing"
import Featuers from "./Component/Featuers"

function App() {

  return (
    <BrowserRouter>
       <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Pricing" element={ <Pricing />} />
      <Route path="/featuers" element={<Featuers />} />
    </Routes>
       <Footer />
    </BrowserRouter>
  )
}

export default App
