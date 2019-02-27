import React, { Component } from "react";
import PropTypes from "prop-types";

class Fret extends Component {
  static propTypes = {
    note: PropTypes.string,
    checked: PropTypes.bool
  };

  static defaultProps = {
    checked: false
  };

  render() {
    const { note, checked } = this.props;
    return (
      <div className={`fret${checked ? " checked" : ""}`}>
        <div className="note">{note}</div>
        <div>
          <input type="checkbox" name={note} checked={checked} />
        </div>
      </div>
    );
  }
}

export default Fret;
