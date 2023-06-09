import { useState } from "react";
import DashBoard from "./component/DashBoard";
import LeftNav from "./component/LeftNav";
function App() {
  const [user, setUser] = useState("mujib");
  const [cart, setCart] = useState(0);
  const [state, setState] = useState([]);

  return (
    <div className="app">
      {/* Left Nav */}
      <LeftNav user={user} state={state} setState={setState} />

      {/* SamleI ahve Creaed this for Gihub  demo  */}
//       I AddedThis New Line
      {/* Dashboard */}
      <DashBoard cart={cart} setCart={setCart} user={user} setUser={setUser} state={state} setState={setState} />
    </div>
  );
}

export default App;
