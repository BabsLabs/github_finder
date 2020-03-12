import React, { Fragment, Component } from 'react';
import './App.css';

class App extends Component {
foo = () => "Tony Lemons";

  render() {
    const name = "Tony Lemons";
    return (
      <div className="App">
        <h1>Hello {this.foo()} from React! </h1>
      </div>
    );
  }
}

export default App;