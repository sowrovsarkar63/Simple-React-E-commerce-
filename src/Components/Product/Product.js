import React from "react";
import Rating from "react-rating";
import "./Product.css";
const Product = (props) => {
    const { name, img, price, stock, seller, star } = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-details">
                <h4 className="name">{name}</h4>
                <p>
                    <small>by: {seller}</small>
                </p>
                <p>
                    <Rating
                        emptySymbol="fa fa-star-o fa-2x"
                        fullSymbol="fa fa-star fa-2x"
                        initialRating={star}
                        readonly
                    ></Rating>
                </p>
                <p>Price: {price}</p>
                <p>
                    <small>Only {stock} left in stock - Order soon</small>
                </p>
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="regular-btn"
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default Product;
