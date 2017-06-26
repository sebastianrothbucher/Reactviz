import React, { PureComponent } from 'react';

const stations=[
  {stat: 16, station: "Back Bay / South End Station"},
  {stat: 20, station: "Aquarium Station - 200 Atlantic Ave."},
  {stat: 21, station: "Prudential Center / Belvidere"},
  {stat: 22, station: "South Station - 700 Atlantic Ave."},
  {stat: 23, station: "Mayor Thomas M. Menino - Government Center"},
  {stat: 24, station: "Seaport Square - Seaport Blvd. at Boston Wharf"},
  {stat: 25, station: "Tremont St / W Newton St"},
  {stat: 32, station: "Landmark Centre"},
  {stat: 33, station: "Kenmore Sq / Comm Ave"},
  {stat: 35, station: "Summer St. / Arch St."},
  {stat: 36, station: "Boston Public Library - 700 Boylston St."},
  {stat: 38, station: "TD Garden - Legends Way"},
  {stat: 40, station: "Lewis Wharf - Atlantic Ave."},
  {stat: 41, station: "Packard's Corner - Comm. Ave. at Brighton Ave."},
  {stat: 42, station: "Boylston St. at Arlington St."},
  {stat: 44, station: "Faneuil Hall - Union St. at North St."},
  {stat: 46, station: "Christian Science Plaza"},
  {stat: 47, station: "Cross St. at Hanover St."},
  {stat: 49, station: "Stuart St. at Charles St."},
  {stat: 52, station: "Newbury St / Hereford St"} 
];
const trips={ // [mine-other]: cnt
  "16-16": 48,
  "16-22": 16,
  "16-23": 11,
  "16-25": 25,
  "16-36": 20,
  "16-42": 11,
  "20-20": 55,
  "20-22": 11,
  "20-23": 12,
  "20-24": 22,
  "20-35": 11,
  "20-36": 17,
  "20-38": 13,
  "20-42": 11,
  "20-44": 12,
  "20-47": 12,
  "20-49": 10,
  "21-21": 98,
  "21-25": 12,
  "21-36": 28,
  "21-38": 10,
  "21-42": 25,
  "21-49": 19,
  "21-52": 10,
  "22-16": 16,
  "22-20": 25,
  "22-22": 55,
  "22-23": 11,
  "22-24": 28,
  "22-36": 31,
  "22-38": 32,
  "22-40": 33,
  "22-42": 30,
  "22-44": 18,
  "22-47": 16,
  "22-49": 16,
  "23-21": 15,
  "23-22": 17,
  "23-23": 67,
  "23-24": 16,
  "23-25": 18,
  "23-33": 11,
  "23-36": 34,
  "23-38": 11,
  "23-49": 13,
  "23-52": 10,
  "24-20": 12,
  "24-22": 17,
  "24-23": 21,
  "24-24": 41,
  "24-35": 10,
  "24-38": 16,
  "24-40": 14,
  "24-42": 18,
  "24-47": 16,
  "25-16": 16,
  "25-22": 12,
  "25-23": 10,
  "25-24": 11,
  "25-25": 45,
  "25-36": 16,
  "25-46": 13,
  "25-52": 11,
  "32-32": 41,
  "32-36": 15,
  "32-41": 11,
  "32-42": 19,
  "33-21": 13,
  "33-33": 34,
  "33-36": 20,
  "33-41": 21,
  "33-42": 24,
  "35-20": 10,
  "35-22": 14,
  "35-24": 11,
  "35-35": 28,
  "35-36": 16,
  "35-38": 21,
  "35-40": 10,
  "35-42": 12,
  "35-44": 13,
  "35-47": 10,
  "36-16": 11,
  "36-21": 19,
  "36-22": 58,
  "36-23": 20,
  "36-25": 19,
  "36-32": 21,
  "36-33": 28,
  "36-35": 13,
  "36-36": 158,
  "36-38": 17,
  "36-40": 14,
  "36-41": 15,
  "36-42": 48,
  "36-44": 25,
  "36-46": 27,
  "36-47": 21,
  "36-49": 21,
  "36-52": 24,
  "38-20": 16,
  "38-22": 27,
  "38-24": 13,
  "38-35": 21,
  "38-36": 14,
  "38-38": 41,
  "38-40": 17,
  "38-42": 26,
  "38-44": 17,
  "38-49": 12,
  "38-52": 12,
  "40-22": 36,
  "40-35": 13,
  "40-38": 10,
  "40-40": 59,
  "40-42": 15,
  "40-44": 13,
  "40-47": 16,
  "41-33": 15,
  "41-36": 20,
  "41-41": 67,
  "41-42": 19,
  "41-52": 11,
  "42-16": 16,
  "42-20": 16,
  "42-21": 14,
  "42-22": 19,
  "42-23": 17,
  "42-24": 14,
  "42-33": 19,
  "42-35": 14,
  "42-36": 35,
  "42-38": 17,
  "42-41": 18,
  "42-42": 92,
  "42-44": 27,
  "42-46": 22,
  "42-47": 26,
  "42-49": 18,
  "42-52": 33,
  "44-20": 14,
  "44-22": 11,
  "44-33": 10,
  "44-35": 10,
  "44-36": 28,
  "44-38": 18,
  "44-40": 20,
  "44-42": 28,
  "44-44": 50,
  "44-49": 13,
  "44-52": 10,
  "46-21": 11,
  "46-23": 12,
  "46-25": 10,
  "46-33": 10,
  "46-36": 24,
  "46-41": 10,
  "46-42": 23,
  "46-46": 85,
  "46-52": 10,
  "47-22": 14,
  "47-24": 17,
  "47-35": 18,
  "47-36": 24,
  "47-38": 10,
  "47-40": 12,
  "47-42": 17,
  "47-47": 38,
  "47-49": 12,
  "49-21": 14,
  "49-23": 11,
  "49-25": 12,
  "49-36": 18,
  "49-38": 11,
  "49-42": 13,
  "49-44": 16,
  "49-49": 38,
  "52-22": 12,
  "52-23": 14,
  "52-32": 17,
  "52-35": 11,
  "52-36": 32,
  "52-41": 11,
  "52-42": 21,
  "52-46": 10,
  "52-52": 69
};

const size=500;
const middle=Math.round(size/2);
const radius=Math.round(size/2-10);
const bend=radius*2.5;

let deg2Point=(deg, radius_) => (Math.round(middle+(radius_ || radius)*Math.cos(deg*2*Math.PI/360))+" "+Math.round(middle-(radius_ || radius)*Math.sin(deg*2*Math.PI/360)));

class App extends PureComponent {
  constructor(props){
    super(props);
    this.state={};
  }
  _onMouseOver(stat){
    this.setState({highlight: stat});
  }
  render() {
    let landings={}; // [mine-other]: {mine, other, start, end}
    let degPerTrip=(360-stations.length)/Object.keys(trips).map((k) => trips[k]).reduce((t1, t2) => t1+t2, 0);
    let stationArcs={}; // [mine]: {mine, start, end}
    let currentDeg=0;
    [].concat(stations).forEach((s1, i1) => {
      let stationStartDeg=currentDeg;
      [].concat(stations).forEach((s2, i2) => {
        let key=s1.stat+"-"+s2.stat;
        let tripDeg=(trips[key] || 0)*degPerTrip;
        let nextDeg=currentDeg+tripDeg;
        landings[key]={mine: s1, other: s2, start: currentDeg, end: nextDeg};
        currentDeg=nextDeg; // on we go;
      });
      stationArcs[s1.stat]={mine: s1, start: stationStartDeg, end: currentDeg};
      currentDeg+=1; // small space between
    });
    let arcs=[];
    let arcsHighlight=[];
    [].concat(stations).forEach((s1, i1) => {
      let isHighlight=(this.state.highlight==s1.stat);
      (isHighlight?arcsHighlight:arcs).push(<path key={"caption_"+s1.stat} id={"caption_"+s1.stat} onMouseOver={(() => this._onMouseOver(s1.stat)).bind(this)} d={"M "+deg2Point(stationArcs[s1.stat].start, radius+5)+" A "+(radius+5)+" "+(radius+5)+" 0 0 0 "+deg2Point(stationArcs[s1.stat].end, radius+5)} fill="none" strokeWidth="10" stroke={(isHighlight?"green":"black")} />);
      // TODO: first and 2nd half, other angle and order by next
      [].concat(stations).filter((s_, i_) => i_>i1).forEach((s2, i2) => {
        let isHighlight=(this.state.highlight==s1.stat || this.state.highlight==s2.stat);
        let fromLand=landings[s1.stat+"-"+s2.stat];
        let toLand=landings[s2.stat+"-"+s1.stat];
        (isHighlight?arcsHighlight:arcs).push(<path key={s1.stat+"-"+s2.stat} d={"M "+deg2Point(fromLand.start)+" A "+radius+" "+radius+" 0 0 0 "+deg2Point(fromLand.end)+" A "+bend+" "+bend+" 0 0 1 "+deg2Point(toLand.start)+" A "+radius+" "+radius+" 0 0 0 "+deg2Point(toLand.end)+" A "+bend+" "+bend+" 0 0 0 "+deg2Point(fromLand.start)} fill={(isHighlight?"lightgreen":"grey")} />);
      });
      arcs.push(<text key={s1.stat}><textPath href={"#caption_"+s1.stat}>{s1.stat}</textPath></text>);
    });
    return (
      <div>
        <svg width={size} height={size}>
          {[].concat(arcs, arcsHighlight)}
        </svg>
      </div>
    );
  }
}

export default App;
