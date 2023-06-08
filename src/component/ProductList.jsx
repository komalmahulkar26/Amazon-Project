import React, { useEffect, useState } from "react";
import data from "../../data.json";
import Product from "./Product";
function ProductList({ cart, setCart, state, setState }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    setProduct(data.data);
    // setProduct()
  }, []);
  return (
    <div>
      <div className="productList">
        {product.map((item) => (
          <Product
            key={item.id}
            title={item?.title}
            price={item?.price}
            img={item?.img}
            cart={cart}
            setCart={setCart}
            state={state}
            setState={setState}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
