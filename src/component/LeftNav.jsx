import React, { useState } from "react";

function LeftNav(props) {
  console.log(props);
  const { state, setState } = props;
  return (
    <div className="leftNav">
      <h2>{props.user}</h2>
      {state.map((item) => {
        return (
          <div key={item.id} style={{ display: "flex", flexDirection: "column" }}>
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <div>{item.cart}</div>
          </div>
        );
      })}
    </div>
  );
}

export default LeftNav;
