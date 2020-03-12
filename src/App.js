import React, { Fragment, Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = "Tony Lemons";
    const loading = true;
    if (loading){
      return <h4>Loading...</h4>
    }
    return (
      <div className="App">
        <h1>Hello {this.foo()} from React! </h1>
      </div>
    );
  }
}

export default App;