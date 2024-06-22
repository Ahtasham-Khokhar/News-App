import React, { Component } from 'react'

export class  Navbar extends Component {
  render() {
    return (
      <>
      <nav className ="navbar navbar-expand-lg navbar-light bg-light">
  <a className ="navbar-brand" href="/">Navbar</a>
  <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className ="navbar-toggler-icon"></span>
  </button>
      
  <div className ="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className ="navbar-nav mr-auto">
      <li className ="nav-item active">
        <a className ="nav-link" href="/">Home <span className ="sr-only">(current)</span></a>
      </li>
      <li className ="nav-item">
        <a className ="nav-link" href="/">About News Api</a>
      </li>
      <div className= "dropdown">
  <button className= "btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      News Category
  </button>
  <ul className= "dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className= "dropdown-item" href="/">Technology News</a></li>
    <li><a className= "dropdown-item" href="/">Sports News</a></li>
    <li><a className= "dropdown-item" href="/">Entertainment News</a></li>
    <li><a className= "dropdown-item" href="/">Health and Wellness News</a></li>
    <li><a className= "dropdown-item" href="/">Business News </a></li>
    <li><a className= "dropdown-item" href="/">Science News</a></li>
  </ul>
</div>
      <li className ="nav-item">
        <a className ="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Cotact us for any confirmation about n</a>
      </li>
    </ul>
  </div>
</nav>
      </>
    )
  }
}

export default Navbar