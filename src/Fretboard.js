import React, { Component } from "react";
import { goToIntervalAfter } from "./helpers/Notes";
import PropTypes from "prop-types";
import String from "./String";

class Fretboard extends Component {
  static propTypes = {
    notesToDisplay: PropTypes.array
  };

  static defaulProps = {
    notesToDisplay: []
  };

  constructor(props) {
    super(props);
    this.state = {
      fretboard: []
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

  buildFretboard(neckboardSchemas) {
    return neckboardSchemas.strings.map(firstNote =>
      this.buildString(firstNote, neckboardSchemas.fretsPerString)
    );
  }

  componentDidMount() {
    this.setState({
      fretboard: this.buildFretboard(this.props.neckboardSchemas)
    });
  }

  checkNote(note, string) {}

  componentDidUpdate(prevProps) {
    const { notesToDisplay } = this.props;
    const { fretboard } = this.state;
    if (
      notesToDisplay.length &&
      notesToDisplay.length !== prevProps.notesToDisplay.length
    ) {
      const updatedFretboard = fretboard.map(string => {
        return string.map(fret => {
          return {
            ...fret,
            hintEnabled: !!notesToDisplay.find(note => note.name === fret.name)
          };
        });
      });
      this.setState({
        fretboard: updatedFretboard
      });
    }
  }

  render() {
    const { fretboard } = this.state;
    return (
      <div className="fretboard">
        {fretboard.map(stringNotes => (
          <String
            key={`${stringNotes[0].name}${stringNotes[0].octave}-string`}
            notes={stringNotes}
          />
        ))}
      </div>
    );
  }
}

export default Fretboard;
