import React from "react";

function Cart(props) {
    const { cart } = props;
    let total = 0;
    let totalQuantity = 0;

    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        totalQuantity = totalQuantity + product.quantity;
        total = total + product.price * totalQuantity;
    }
    const shiping = total > 0 ? 15 : 0;
    const tax = (total + shiping) * 0.1;
    const grandTotal = total + shiping + tax;
    return (
        <div>
            <h1>Order summary</h1>
            <h3>Items Ordered {totalQuantity}</h3>

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
