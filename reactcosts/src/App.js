import HelloWorld from './components/HelloWorld';
import './App.css';
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
      <Evento numero="1"/>
      <Evento numero="2"/>
      <Form />
   </div>
  )
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
}

export default App;
