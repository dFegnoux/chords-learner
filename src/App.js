import React, { Component } from "react";
import "./App.css";

import Neckboard from "./Neckboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="chordToGuess">
          <span>
            Chord to guess : <b>C Maj 7</b>
          </span>
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
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
