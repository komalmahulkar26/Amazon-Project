import React from "react";
import UserProfile from "./UserProfile";
import Footer from "./Footer";
import ProductList from "./ProductList";

function Cart({ cart, setCart }) {
  return (
    <div style={{ flex: 1, background: "yellow", height: "50px" }}>
      <div
        style={{
          backgroundColor: "orangered",
          padding: "5px",
          borderRadius: "9999px",
          width: "50px",
          height: "50px",
          color: "whitesmoke",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        {cart || 0}
      </div>
      Count
    </div>
  );
}

function DashBoard({ user, setUser, cart, setCart, state, setState }) {
  return (
    <div className="dashboard">
      <div>
        <Cart cart={cart} setCart={setCart} />
        <h2>UserProfile</h2>
        {/* UserProfile */}
        <UserProfile user={user} setUser={setUser} />

        <ProductList cart={cart} setCart={setCart} state={state} setState={setState} />
      </div>

      <Footer user={user} />
    </div>
  );
}

export default DashBoard;
