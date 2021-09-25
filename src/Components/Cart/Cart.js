import React from "react";

function Cart(props) {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    return (
        <div>
            <h1>Order summary</h1>
            <h3>Items Ordered {props.cart.length}</h3>
            <br />
            <p>Total: {total}</p>
        </div>
    );
}

export default Cart;
