import React, { Fragment, Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = "Tony Lemons";
    return (
      <div className="App">
        <h1>Hello {name.toUpperCase()} from React! </h1>
      </div>
    );
  }
}

export default App;