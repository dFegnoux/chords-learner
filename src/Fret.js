import React, { Component } from "react";
import PropTypes from "prop-types";

class Fret extends Component {
  static propTypes = {
    fret: PropTypes.object,
    checked: PropTypes.bool,
    hintEnabled: PropTypes.bool,
    selectNote: PropTypes.func
  };

  static defaultProps = {
    checked: false,
    selectNote: () => {
      console.warn("You MAY do something when user click on a fret right ?");
    }
  };

  handleChange = () => {
    this.props.selectNote(this.props.fret);
  };

  render() {
    const { fret, checked, hintEnabled } = this.props;
    return (
      <div
        className={`fret${checked ? " checked" : ""}${
          hintEnabled ? " hint" : ""
        }`}
        onClick={this.handleChange}
      >
        <div className="note">{fret.note.name}</div>
        <div>
          <input
            type="checkbox"
            name={`${fret.note.name}${fret.note.octave}`}
            checked={checked}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default Fret;
