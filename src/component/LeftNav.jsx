import React from "react";

function LeftNav(props) {
  console.log(props);
  return (
    <div className="leftNav">
      <h2>{props.user}</h2>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  );
}

export default LeftNav;
