import React, { Component,Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import {ApolloProvider} from 'react-apollo'
import  client from './apolloClient'
import { Routes } from './Routes';

class App extends Component {
  render() {
    return (
<Fragment>
<div className="App">

  <ApolloProvider client={client}>
  <div></div>
  <Routes/>
  </ApolloProvider>


      
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
      </Fragment>
    );
  }
}

export default App;
