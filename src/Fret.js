import React, { Component } from "react";
import PropTypes from "prop-types";

class Fret extends Component {
  static propTypes = {
    note: PropTypes.object,
    checked: PropTypes.bool,
    hintEnabled: PropTypes.bool
  };

  static defaultProps = {
    checked: false
  };

  render() {
    const { note, checked, hintEnabled } = this.props;
    return (
      <div
        className={`fret${checked ? " checked" : ""}${
          hintEnabled ? " hint" : ""
        }`}
      >
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
