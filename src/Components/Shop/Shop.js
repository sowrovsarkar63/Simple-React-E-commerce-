import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
function Shop() {
    const [products, setProduct] = useState([]);
    const [cart, setcart] = useState([]);

    useEffect(() => {
        fetch("./products.json")
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);

    // add cart product in local storage
    useEffect(() => {
        const savedCart = getStoredCart();
        if (savedCart) {
            for (const key in savedCart) {
                const addedProduct = products.find(
                    (product) => product.key === key
                );
                console.log(key, addedProduct);
            }
        }
    }, [products]);

    const handleAddToCart = (product) => {
        const NewCart = [...cart, product];
        setcart(NewCart);

        // Save cart data in the localstorage

        addToDb(product.key);
    };
    return (
        <div className="shop-container">
            <div className="product-container">
                {products.map((product) => (
                    <Product
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>
                ))}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
}
export default Shop;
