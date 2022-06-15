import "./App.css";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes> 
        <Route exact path="/" element={<Home/>}/>
        <Route path="/empresa" element={<Empresa/>}/>
        <Route path="/contato" element={<Contato/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App

