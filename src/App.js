import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as data from './data';
import GridTable from "./components/GridTable/GridTable";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <GridTable header={data.header} data={data.data} tableProperties={data.tableProperties} />
      </div>
    );
  }
}

export default App;
