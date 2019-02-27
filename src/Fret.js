import React, { Component } from "react";
import PropTypes from "prop-types";

class Fret extends Component {
  static propTypes = {
    note: PropTypes.object,
    checked: PropTypes.bool
  };

  static defaultProps = {
    checked: false
  };

  render() {
    const { note, checked } = this.props;
    return (
      <div className={`fret${checked ? " checked" : ""}`}>
        <div className="note">{note.name}</div>
        <div>
          <input
            type="checkbox"
            name={`${note.name}${note.octave}`}
            checked={checked}
          />
        </div>
      </div>
    );
  }
}

export default Fret;
