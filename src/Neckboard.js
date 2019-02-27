import React, { Component } from "react";
import { Notes, goToIntervalAfter } from "./constants/Notes";
import String from "./String";

class Neckboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      neckboard: []
    };
  }
  /**
   * Build an array with all notes between start and lastFret
   *
   * @param {string} startNote
   * @param {number} lastFret
   *
   * @returns {Array} The string containing all notes
   */
  buildString(startNote, lastFret) {
    const string = [startNote];

    for (let i = 0; i < lastFret; i++) {
      string.push(goToIntervalAfter(1, string[i]));
    }

    return string;
  }

  buildNeckboard(neckboardSchemas) {
    return neckboardSchemas.strings.map(firstNote =>
      this.buildString(firstNote, neckboardSchemas.fretsPerString)
    );
  }

  componentDidMount() {
    this.setState({
      neckboard: this.buildNeckboard(this.props.neckboardSchemas)
    });
  }

  render() {
    const { neckboard } = this.state;
    return (
      <div className="neckboard">
        {neckboard.map(stringNotes => (
          <String key={`${stringNotes}-string`} notes={stringNotes} />
        ))}
      </div>
    );
  }
}

export default Neckboard;
