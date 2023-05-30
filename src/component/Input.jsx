import React, { Component } from "react";

export class Input extends Component {
  render() {
    return (
      <div className="input">
        <label htmlFor=""> Enter The Name</label>
        <input type="text" />
      </div>
    );
  }
}

export default Input;
