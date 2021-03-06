import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import TextField from './components/TextField/TextField'


import ModalComponent from './components/ModalComponent'
import {Button} from 'reactstrap';

import ButtonComponent from "./components/ButtonComponent/ButtonComponent";
import * as buttonData from './utils/sample-data/button-data';
import TableDisplay from "./containers/TableDisplay/TableDisplay";

class App extends Component {

  onButtonClick() {
    alert('Test');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">
          <ButtonComponent config={buttonData.config} onClick={this.onButtonClick}>Test Button</ButtonComponent>
          <GridTable header={tableData.header}
                     data={tableData.tableData}
                     columnWidth={tableData.widthOfColumns}
                     tableProperties={tableData.tableProperties}
          />
          <TextField labeltext="User Name"/>
          <br/>
          <TableDisplay/>
        </div>
      </div>
    );
  }

}

export default App;
