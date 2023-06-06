import { useState } from "react";
import DashBoard from "./component/DashBoard";
import LeftNav from "./component/LeftNav";
function App() {
  const [user, setUser] = useState("mujib");
  return (
    <div className="app">
      {/* Left Nav */}
      <LeftNav user={user} />
      {/* Dashboard */}
      <DashBoard />
    </div>
  );
}

export default App;
