import logo from './logo.svg';
import './App.css';
import {} from '@mui/material';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Home from "./Pages/Home";
import Compras from "./Pages/Compras";
import Login from "./Pages/Login";
import SearchResult from "./Pages/SearchResult";


function App() {
  return (
    <Router>
    <div className="App">
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
    </div>
    <Switch>
      <Route path="/compras" component={Compras} />
      <Route path="/login" component={Login} />
      <Route path="/searchresult" component={SearchResult} />
      <Route path="/" component={Home} />
    </Switch>
    </Router>
  );
}

export default App;
