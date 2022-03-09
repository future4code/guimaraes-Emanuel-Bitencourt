import logo from './logo.svg';
import './App.css';
import styled from 'stiled-componets'
import Cadastro from './components/users';

const AppDiv = styled.div`
  display:flex;
  justify-content: center;
  padding: 5 px;

` 



function App() {
  return (
    <AppDiv className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    </AppDiv>
  );
}

export default App;
