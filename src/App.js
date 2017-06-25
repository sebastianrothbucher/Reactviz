import React, { Component } from 'react';

let deg2Point=(deg) => (Math.round(250+200*Math.cos(deg*2*Math.PI/360))+" "+Math.round(250-200*Math.sin(deg*2*Math.PI/360)));

class App extends Component {
  render() {
    return (
      <div>
        <svg width="500" height="500">
          <circle cx="250" cy="250" r="200" stroke="blue" stroke-width="1" fill="none"></circle>
          <path d={"M "+deg2Point(10)+" A 200 200 0 0 0 "+deg2Point(20)+" A 800 800 0 0 1 "+deg2Point(180)+" A 200 200 0 0 0 "+deg2Point(195)} fill="grey" />
          <path d={"M "+deg2Point(80)+" A 200 200 0 0 0 "+deg2Point(100)+" A 800 800 0 0 1 "+deg2Point(200)+" A 200 200 0 0 0 "+deg2Point(210)} fill="pink" />
        </svg>
      </div>
    );
  }
}

export default App;
