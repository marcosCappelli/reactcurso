import HelloWorld from './components/HelloWorld';
import './App.css';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';
import Frase from './components/Frase';

function App() {
  const nome = "Maria joaquina"

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

    </div>
  )
}

export default App;
