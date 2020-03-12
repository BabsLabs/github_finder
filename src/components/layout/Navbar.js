import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <nav className="bg-primary">
        <h1>
          <i className="fab fa-github"></i> {this.props.title}
        </h1>
      </nav>
    )
  }
}

export default Navbar
