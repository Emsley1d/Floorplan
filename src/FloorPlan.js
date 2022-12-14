import React, { Component } from 'react';
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom';
import Bathroom from './Bathroom';

// console.log(Kitchen)
// console.log(LivingRoom)
// console.log(Bedroom)
// console.log(Bathroom)

//! EVERYTHING SUCCESFULLY LINKED

class FloorPlan extends Component {
  render() {
    return (
      <div>
        <Bedroom bedNum={0} />
        <Bedroom bedNum={1} />
        <LivingRoom />
        <Bathroom size='Family Bathroom' />
        <Kitchen />
        <Bathroom size='Half Bath' />
        <Bedroom bedNum={2} />
      </div>
    );
  }
}

export default FloorPlan

