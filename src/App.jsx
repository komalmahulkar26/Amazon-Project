import { useEffect, useState } from "react";
import "./App.css";
import Login from "./component/Login";
import Todo from "./component/Todo";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    setIsLogged(JSON.parse(localStorage.getItem("isLogged")));
    console.log("hello");
  }, []);
  const handleLogOut = () => {
    localStorage.setItem("isLogged", false);
    setIsLogged(false);
  };
  return (
    <div>
      <button onClick={handleLogOut}>LogOut</button>
      {isLogged ? <Todo setIsLogged={setIsLogged} /> : <Login isLogged={isLogged} setIsLogged={setIsLogged} />}

      {/* <Todo /> */}
    </div>
  );
}

export default App;
