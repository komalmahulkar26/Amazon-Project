import React, { useState } from "react";
function Product(props) {
  const [localCount, setLocalCount] = useState(0);
  const { cart, setCart, state, setState } = props;

  const increase = () => {
    setCart(cart + 1);
    setLocalCount(localCount + 1);
    setState([
      ...state,
      {
        id: props.id,
        title: props.title,
        price: props.price,
        cart: localCount,
      },
    ]);
  };
  const decrease = () => {
    setCart(cart - 1);
    setLocalCount(localCount - 1);
  };
  return (
    <div className="product">
      <div>
        <img style={{ width: "150px" }} src={props.img} alt="" />
      </div>
      <div>
        <p>{props.title}</p>
        <p style={{ fontSize: "20px", fontStyle: "italic" }}>{props.price}</p>
      </div>
      {localCount > 0 ? (
        <div style={{ display: "flex" }}>
          <button onClick={increase}>+</button>
          <div style={{ background: "red", color: "white", width: "60px" }}>{localCount}</div>
          <button onClick={decrease}>-</button>
        </div>
      ) : null}
      <button style={{ marginTop: "auto" }} onClick={increase}>
        Add To Cart
      </button>
    </div>
  );
}

export default Product;
