import React, { useState, useEffect } from "react";

function Cart({
  cartCars,
  cartCount,
  incrementAmount,
  decrementAmount,
  deleteFromCart,
  clearCart,
}) {
  const [finalPrice, setFinalPrice] = useState(0);
  const totalPrice = () => {
    let sum = 0;
    console.log(cartCars);
    for (const car of cartCars) {
      if (car.amount > 1) {
        sum += car.price * car.amount;
      } else if (car.amount == 1) {
        sum += Number(car.price);
      }
    }
    setFinalPrice(sum);
  };

  useEffect(() => {
    totalPrice();
  }, [cartCars]);

  return (
    <div className="cart-div">
      <div className="cart-head">
        <h1 className="your-cart">Your Cart</h1>
      </div>
      <div className="cart-cars-container">
        {cartCars.map((car) => {
          return (
            <div className="cart-car-container" key={car.id}>
              <div className="cart-car-top">
                <img className="cart-car-img" src={car.image} alt="car"></img>
                <div className="cart-car-top-right">
                  <h2 className="cart-car-name">{car.name}</h2>
                  <div className="cart-car-amount-container" id={car.id}>
                    <button
                      className="cart-car-amount-decrement"
                      onClick={decrementAmount}
                    >
                      -
                    </button>
                    <p className="cart-car-amount">{car.amount}</p>
                    <button
                      className="cart-car-amount-increment"
                      onClick={incrementAmount}
                    >
                      +
                    </button>
                  </div>
                  <p className="cart-car-price">${car.price * car.amount}</p>
                </div>
              </div>
              <div className="cart-car-bottom" id={car.id}>
                <button className="cart-car-delete" onClick={deleteFromCart}>
                  Delete From Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-bottom">
        <p className="total-price">Subtotal ${finalPrice}</p>
        <button className="checkout-button" onClick={clearCart}>
          Proceed to Checkout (Clears Cart)
        </button>
      </div>
    </div>
  );
}

export default Cart;
