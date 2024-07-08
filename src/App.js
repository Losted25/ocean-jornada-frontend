import logo from './logo.svg';
import './App.css';

function Saudacao({nome}){
 return(
  <h1>
    Olá, {nome}
  </h1>
 ) 
}

function App() {
  let usuario1 = "Raffael Eccard"

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Meu primeiro projeto React</h1>
        <Saudacao nome={usuario1}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
