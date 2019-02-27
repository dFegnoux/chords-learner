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
              strings: ["G", "D", "A", "E"]
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
