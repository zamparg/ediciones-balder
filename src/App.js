import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenidos!
        </p>
        <a
          className="App-link"
          href="https://arte-escuela.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Arte-Escuela
        </a>
      </header>
    </div>
  );
}

export default App;
