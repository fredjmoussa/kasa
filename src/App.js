/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
*/

import React, { Fragment } from "react"
import "./index.css"

import { BrowserRouter as Router, Route, Link, Switch, Redirect, } from "react-router-dom"

export default function App() {

  const logement = "Cozy loft on the Canal Saint-Martin"
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/fichelogement">Fiche Logement</Link>
            </li>
          </ul>
        </nav>
        ;<Switch>
            <Route path="/" exact component={Home} />          
            <Route path="/about" component={About} />
            <Route path="/fichelogement" component={FicheLogement} />
            <Route render={() => <h1>404 Oups! La page que vous demandez n'existe pas</h1>} />
        </Switch>
      </main>
    </Router>
  )
}
/*
const Error = ({ history }) => (
  <Fragment>
    <h1>404 Oups! La page que vous demandez n'existe pas</h1>
    <button onClick={() => history.push("/")}>Retourner sur la page d'accueil</button>
    <Text />
  </Fragment>
)
*/
/*
const Home = () => (
  <Fragment>
    <h1>Accueil</h1>
    <Text />
  </Fragment>
)
*/
const Home = ({
  match: {
    params: { logement },
  },
}) => (
  // props.match.params.logement
  <Fragment>
    {logement !== "Titre de la location" ? <Redirect to="/" /> : null}
    <h1>Accueil {logement}</h1>
    <Text />
  </Fragment>
)

const About = () => (
  <Fragment>
    <h1>About</h1>
    <Text />
  </Fragment>
)

const Text = () => (
  <p>
    Chez vous, partout et ailleurs
  </p>
)

const FicheLogement = ({
  match: {
    params: { logement },
  },
}) => (
  // props.match.params.logement
  <Fragment>
    <h1>FicheLogement {logement}</h1>
    <Text />
  </Fragment>
)