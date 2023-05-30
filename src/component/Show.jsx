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
    };
    console.log("im first");
  }
  handleClick = () => {
    this.setState();
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
        {data.map((item) => (
          <Card key={item.id} id={item.id} name={item.name} />
        ))}

        <Input />
      </div>
    );
  }
}

export default Show;
