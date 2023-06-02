import React, { useEffect, useState } from "react";
// import { v4 as uuidv4 } from 'uuid';

function Todo({ setIsLogged }) {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const handleClick = () => {
    setData([...data, { id: count, name: value }]);
    localStorage.setItem("todo Item", JSON.stringify([...data, { id: count, name: value }]));
    setValue("");
    setCount(count + 1);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleLogOut = () => {
    localStorage.setItem("isLogged", false);
    setIsLogged(false);
  };
  const handleClear = () => {
    localStorage.removeItem("todo Item");
    setData([]);
  };
  useEffect(() => {
    const todo = localStorage.getItem("todo Item");
    if (todo) {
      const lg = JSON.parse(todo).length;
      setCount(lg);
      setData(JSON.parse(todo));
    }
  }, []);

  return (
    <div>
      <h1>Todo Component</h1>
      <button onClick={handleLogOut}>LogOut</button>
      <button onClick={handleClear}>Clear Data</button>
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "white",
            color: "black",
            width: "400px",
            padding: "10px",
            margin: "2px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{item.id}</span>
            <p>{item.name}</p>
          </div>
        </div>
      ))}
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleClick}>Add To Do</button>
    </div>
  );
}

export default Todo;
