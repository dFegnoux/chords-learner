import React, { Component } from "react";
import "./App.css";

import Neckboard from "./Neckboard";
import { getChordFromRoot } from "./constants/Chords";
import { getNoteByName } from "./constants/Notes";
import { getScaleNotesFromRoot } from "./constants/Scales";

class App extends Component {
  state = {
    chordToDisplay: ""
  };

  componentDidMount() {
    console.log(getChordFromRoot(getNoteByName("C"), "major"));
    console.log(getScaleNotesFromRoot(getNoteByName("C"), "major"));
  }

  showChord = () => {
    this.setState({
      chordToDisplay: getChordFromRoot(getNoteByName("C"), "major")
    });
  };

  render() {
    return (
      <div className="App">
        <div className="chordToGuess">
          <span>
            Chord to guess : <b>C Maj</b>
          </span>
        </div>
        <div className="showChord">
          <button onClick={this.showChord}>
            Show me <b>C Maj</b> chord
          </button>
        </div>

        <form>
          <Neckboard
            neckboardSchemas={{
              fretsPerString: 12,
              strings: [
                { name: "G", octave: 2 },
                { name: "D", octave: 2 },
                { name: "A", octave: 1 },
                { name: "E", octave: 1 }
              ]
            }}
            notesToDisplay={this.state.chordToDisplay}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
