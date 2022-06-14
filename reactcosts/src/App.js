import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={ <Home/>}/> 
        <Route path='/empresa' element={<Empresa/>}/>        
        <Route path='/contato' element={ <Contato/>}/>
         
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

/*import {useState} from 'react'

import './App.css';
import Saudacao from './components/Saudacao';
import SeuNome from './components/SeuNome';

function App() {

  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome}/>
    </div>
  )
}

export default App
*/
/*
import OutraLista from './components/OutraLista';

function App() {

  const meusItens = ["React", "Vue", "Angular"]

  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
    </div>
  )
}

export default App
*/

/*import Condicional from './components/Condicional';

function App() {
  return (
      <div className="App">
         <h1>Renderização Condicional</h1>
        <Condicional />
      </div>
  )
}

export default App
*/


/*
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  //const nome = "Maria joaquina"

  //Pode ser usado propriedades dentro do evento "numero"
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento/>
      <Form />
   </div>
  )
  */
  /*
  return (
    <div className="App">
      <h1>Teste CSS global</h1>
      <Frase />
      <Frase />
      <HelloWorld />
      <SayMyName nome= "Marcolino"/>
      <SayMyName nome= "Marcelo"/>
      <SayMyName nome= {nome} />
      <Pessoa
        nome= "Rogério"
        idade= "45"
        profissao= "Motorista app"
        foto= "https://via.placeholder.com/150"
        />
        <List />

    </div>
  )
  */
 /*
}

export default App;
*/