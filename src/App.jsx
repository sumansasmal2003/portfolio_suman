import { BrowserRouter, Routes, Route } from "react-router-dom"
import Mainpage from "./pages/Mainpage"
import Contact from "./components/Contact"
import Resume from "./pages/Resume"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
