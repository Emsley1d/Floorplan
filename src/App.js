import React, {Component} from 'react'
import FloorPlan from './FloorPlan'

console.log(FloorPlan)


export default class App extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.FloorPlan}</h3>
      </div>
    )}
  }
