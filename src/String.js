import React, { Component } from "react";
import Fret from "./Fret";

class String extends Component {
  render() {
    return (
      <div className="string">
        {this.props.notes.map((note, index) => (
          <Fret key={`${note}-fret`} note={note} fretNumber={index} />
        ))}
      </div>
    );
  }
}

export default String;
