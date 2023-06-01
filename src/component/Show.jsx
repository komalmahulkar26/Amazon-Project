import React, { Component } from "react";
import Card from "./Card";
import Input from "./Input";

export class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: "13",
          name: "kavita",
        },
        {
          id: "23",
          name: "babita",
        },
        {
          id: "34",
          name: "savita",
        },
      ],
      name: "",
    };
    console.log("im first");
  }
  handleClick = (value) => {
    this.setState((state) => {
      state.data = [...state.data, { id: "4543", name: value }];
    });
    console.log(this.state.data);
  };
  componentDidMount() {
    console.log("what my no");
    this.handleClick();
  }
  render() {
    console.log("lol ");
    const { data } = this.state;
    return (
      <div className="container">
        <h1>Show</h1>
        <p>Your Name is </p>
        {this.state.data.map((item) => (
          <Card key={item.id} id={item.id} name={item.name} />
        ))}

        <Input change={this.handleClick} />
      </div>
    );
  }
}

export default Show;
