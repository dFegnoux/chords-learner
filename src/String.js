import React, { Component } from "react";
import PropTypes from "prop-types";
import Fret from "./Fret";

class String extends Component {
  static propTypes = {
    frets: PropTypes.array,
    selectNote: PropTypes.func
  };

  render() {
    const { selectNote, frets } = this.props;
    return (
      <div className="string">
        {this.props.frets.map((fret, index) => (
          <Fret
            key={`${fret.note.name}${fret.note.octave}-fret`}
            fret={fret}
            fretNumber={index}
            checked={fret.checked}
            hintEnabled={fret.hintEnabled}
            selectNote={selectNote}
          />
        ))}
      </div>
    );
  }
}

export default String;
