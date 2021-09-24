import React from "react";
import "./Product.css";
const Product = (props) => {
    console.log(props.product);
    const { name, img, price, stock, seller, star } = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-details">
                <h4 className="name">{name}</h4>
                <p>
                    <small>by: {seller}</small>
                </p>
                <p>Rating {star}</p>
                <p>Price: {price}</p>
                <p>
                    <small>Only {stock} left in stock - Order soon</small>
                </p>
            </div>
        </div>
    );
};

export default Product;
