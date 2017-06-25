import React, { Component } from 'react';

const size=500;
const middle=Math.round(size/2);
const radius=Math.round(size/2-10);
const bend=radius*2.5;

let deg2Point=(deg) => (Math.round(middle+radius*Math.cos(deg*2*Math.PI/360))+" "+Math.round(middle-radius*Math.sin(deg*2*Math.PI/360)));

class App extends Component {
  render() {
    return (
      <div>
        <svg width={size} height={size}>
          <circle cx={middle} cy={middle} r={radius} stroke="blue" stroke-width="1" fill="none"></circle>
          <path d={"M "+deg2Point(10)+" A "+radius+" "+radius+" 0 0 0 "+deg2Point(20)+" A "+bend+" "+bend+" 0 0 1 "+deg2Point(180)+" A "+radius+" "+radius+" 0 0 0 "+deg2Point(195)+" A "+bend+" "+bend+" 0 0 0 "+deg2Point(10)} fill="grey" />
          <path d={"M "+deg2Point(80)+" A "+radius+" "+radius+" 0 0 0 "+deg2Point(100)+" A "+bend+" "+bend+" 0 0 1 "+deg2Point(200)+" A "+radius+" "+radius+" 0 0 0 "+deg2Point(210)+" A "+bend+" "+bend+" 0 0 0 "+deg2Point(80)} fill="pink" />
        </svg>
      </div>
    );
  }
}

export default App;
