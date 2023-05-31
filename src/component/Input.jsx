import React, { Component } from "react";

export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "qureshi",
    };
  }
  handleChange = (e) => {
    this.setState((state) => (state.name = e.target.value));
  };
  handleClick = () => {
    console.log(this.state.name);
  };
  handleClick2(e) {
    console.log(e.target.value);
  }
  render() {
    console.log(this.props.data);
    return (
      <div className="input">
        <label htmlFor=""> Enter The Name</label>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <div>
          <button onClick={this.handleClick}>Add to the list</button>
        </div>
      </div>
    );
  }
}

export default Input;
