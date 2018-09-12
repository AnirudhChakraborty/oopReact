import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ModalComponent from './components/ModalComponent'
import { Button} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {  
      isVisible : false
    }

  }

  render() {
    let {isVisible} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={this.showModal}/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
