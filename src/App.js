import React, { Component } from 'react';
import Header from './component/header'
import logo from './logo.svg';
import './App.css';

class App extends Component {
   state = {
    name: 'Tuyen nh',
    age: 22
  };
  haddleClick= (e) => {
    this.setState({name: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <h1> my name is {this.state.name}</h1>
        <br/>
        <input type='text' onChange={this.haddleClick}/>
      
      </div>
    );
  }
}

export default App;
