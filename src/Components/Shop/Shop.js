import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
function Shop() {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch("./products.json")
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);
    return (
        <div className="shop-container">
            <div className="product-container">
                {products.map((product) => (
                    <Product key={product.key} product={product}></Product>
                ))}
            </div>
            <div className="cart-container">
                <h1>Shoping cart </h1>
                <h3>Total Cost </h3>
            </div>
        </div>
    );
}
export default Shop;
