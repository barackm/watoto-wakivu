import React, { Component } from "react";

class Input extends Component {
  state = {};
  render() {
    const { placeholder, type, onChange, onBlur, name } = this.props;
    return (
      <div className="input-text-main-container">
        <div className="input">
          <input
            type="text"
            placeholder={placeholder}
            name={name}
            onBlur={() => onBlur(name)}
            onChange={onChange}
          />
        </div>
      </div>
    );
  }
}

export default Input;
