import React from "react";

function Cart(props) {
    const { cart } = props;
    let total = 0;

    for (const product of cart) {
        total = total + product.price;
    }
    const shiping = 15;
    const tax = (total + shiping) * 0.1;
    const grandTotal = total + shiping + tax;
    return (
        <div>
            <h1>Order summary</h1>
            <h3>Items Ordered {props.cart.length}</h3>

            <br />
            <p>Total: {total.toFixed(2)}</p>
            <br />
            <p>Shiping {shiping}</p>
            <br />
            <p>Taxt {tax.toFixed(2)}</p>

            <h5>Grand Total {grandTotal.toFixed(2)}</h5>
        </div>
    );
}

export default Cart;
