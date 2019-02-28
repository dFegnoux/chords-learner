import React, { Component } from "react";
import { goToIntervalAfter } from "./constants/Notes";
import PropTypes from "prop-types";
import String from "./String";

class Neckboard extends Component {
  static propTypes = {
    notesToDisplay: PropTypes.array
  };

  static defaulProps = {
    notesToDisplay: []
  };

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

  componentDidUpdate(prevProps) {
    const { notesToDisplay } = this.props;
    const { neckboard } = this.state;
    if (
      notesToDisplay.length &&
      notesToDisplay.length !== prevProps.notesToDisplay.length
    ) {
      const updatedFretboard = neckboard.map(string => {
        return string.map(fret => {
          return {
            ...fret,
            checked: !!notesToDisplay.find(note => note.name === fret.name)
          };
        });
      });
      this.setState({
        neckboard: updatedFretboard
      });
    }
  }

  render() {
    const { neckboard } = this.state;
    return (
      <div className="neckboard">
        {neckboard.map(stringNotes => (
          <String
            key={`${stringNotes[0].name}${stringNotes[0].octave}-string`}
            notes={stringNotes}
          />
        ))}
      </div>
    );
  }
}

export default Neckboard;
