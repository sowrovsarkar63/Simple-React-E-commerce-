import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
function Shop() {
    const [products, setProduct] = useState([]);
    const [cart, setcart] = useState([]);
    const [displayProducts, setdisplayProducts] = useState([]);
    useEffect(() => {
        fetch("./products.json")
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setdisplayProducts(data);
            });
    }, []);

    // add cart product in local storage
    useEffect(() => {
        const savedCart = getStoredCart();
        const storedCart = [];

        if (products.length) {
            for (const key in savedCart) {
                const addedProduct = products.find(
                    (product) => product.key === key
                );
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }

            setcart(storedCart);
        }
    }, [products]);

    const handleAddToCart = (product) => {
        const NewCart = [...cart, product];
        setcart(NewCart);

        // Save cart data in the localstorage

        addToDb(product.key);
    };

    const HandleSearch = (e) => {
        const searchText = e.target.value;
        const matchedProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setdisplayProducts(matchedProducts);
    };
    return (
        <>
            <div className="search-container">
                <input
                    onChange={HandleSearch}
                    type="text"
                    name="search"
                    id="search"
                />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {displayProducts.map((product) => (
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
        </>
    );
}
export default Shop;
