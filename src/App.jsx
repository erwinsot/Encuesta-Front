import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EncuestaForm from './components/EncuestaForm'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import VistaPrincipla from './components/VistaPrincipla'
import FormularioPl from './components/FormularioPl'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<EncuestaForm/>}/>
        <Route path="/adentro" element={<FormularioPl/>}/>
      </Routes>
    </Router>
         
    </>
  )
}

export default App
