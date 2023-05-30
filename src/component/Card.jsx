import React, { Component } from "react";

export class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, name } = this.props;
    return (
      <div className="card">
        <p>{id}</p>
        <p>{name}</p>
      </div>
    );
  }
}

export default Card;
