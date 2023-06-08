import React from "react";

function Footer({ user }) {
  return (
    <div className="footer">
      <div className="flex">
        <h2>Footer</h2>
        <h2>{user}</h2>
      </div>
    </div>
  );
}

export default Footer;
