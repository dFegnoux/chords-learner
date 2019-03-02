import React, { Component } from "react";
import { createNote, goToIntervalAfter } from "./helpers/Notes";
import PropTypes from "prop-types";
import String from "./String";
import { equals, uniq } from "ramda";

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
      fretboard: [],
      userResponses: []
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
    const string = [
      { note: createNote(startNote.name, startNote.octave), string: startNote }
    ];

    for (let i = 0; i < lastFret; i++) {
      const nextNote = goToIntervalAfter(1, string[i].note);
      string.push({ note: nextNote, string: startNote });
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

  selectNote = note => {
    const { fretboard } = this.state;

    const updatedFretboard = fretboard.map(string => {
      return string.map(fret => {
        const checked = equals(fret, note) ? !fret.checked : fret.checked;
        return {
          ...fret,
          checked
        };
      });
    });

    this.setState({
      fretboard: updatedFretboard,
      userResponses: uniq([...this.state.userResponses, note.note.name])
    });
  };

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
            hintEnabled: !!notesToDisplay.find(
              note => note.name === fret.note.name
            )
          };
        });
      });
      this.setState({
        fretboard: updatedFretboard
      });
    }
  }

  render() {
    const { fretboard, userResponses } = this.state;

    return (
      <div>
        <div className="fretboard">
          {fretboard.map(string => (
            <String
              key={`${string[0].note.name}${string[0].note.octave}-string`}
              frets={string}
              selectNote={this.selectNote}
            />
          ))}
        </div>

        {!!userResponses.length && (
          <div className="userResponse">
            <span>You've selected : </span>
            <span>{userResponses.join(",")}</span>
          </div>
        )}
      </div>
    );
  }
}

export default Fretboard;
