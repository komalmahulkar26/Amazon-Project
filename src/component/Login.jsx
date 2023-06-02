import React, { useEffect, useState } from "react";

function Login({ isLogged, setIsLogged }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () => {
    localStorage.setItem("isLogged", true);
    setIsLogged(true);
  };
  useEffect(() => {}, []);

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default Login;
