import React from "react";
import UserProfile from "./UserProfile";
import Footer from "./Footer";

function DashBoard() {
  return (
    <div className="dashboard">
      <div>
        <h2>UserProfile</h2>
        {/* UserProfile */}
        <UserProfile />
      </div>

      <Footer />
    </div>
  );
}

export default DashBoard;
