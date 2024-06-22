import React, { Component } from 'react'
import loading from './Spinner.gif'
export class Spinner extends Component {
  render() {
    return (
      <div>{loading}</div>
    )
  }
}
export default Spinner;