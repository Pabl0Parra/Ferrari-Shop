import React, { useState, useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/NavBar";

import Shop from "./pages/ShopPage";
import Home from "./pages/HomePage";
import Error from "./pages/ErrorPage";
import Cart from "./components/Cart";
import CARS from "./CarsData";

import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartCars, setCartCars] = useState([]);
  const [addAmount, setAddAmount] = useState([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]);

  const incrementAmountInShop = (e) => {
    const clickedCarId = e.target.parentNode.parentNode.id;
    console.log(clickedCarId);
    let newArr = addAmount.map((x) => x);
    newArr[clickedCarId] = newArr[clickedCarId] + 1;
    console.log(newArr);
    setAddAmount(newArr);
  };

  const decrementAmountInShop = (e) => {
    const clickedCarId = e.target.parentNode.parentNode.id;
    if (addAmount[clickedCarId] > 1) {
      let newArr = addAmount.map((x) => x);
      newArr[clickedCarId] = newArr[clickedCarId] - 1;
      console.log(newArr);
      setAddAmount(newArr);
    }
  };

  const decrementAmountInCart = (e) => {
    const clickedCarId = e.target.parentNode.id;
    console.log(clickedCarId);
    const carInCart = cartCars.find((element) => element.id == clickedCarId);
    carInCart.amount = carInCart.amount - 1;
    let newArr = cartCars.map((x) => x);
    setCartCars(newArr);
  };

  const incrementAmountInCart = (e) => {
    const clickedCarId = e.target.parentNode.id;
    console.log(clickedCarId);
    const carInCart = cartCars.find((element) => element.id == clickedCarId);
    carInCart.amount = carInCart.amount + 1;
    let newArr = cartCars.map((x) => x);
    setCartCars(newArr);
  };

  const deleteFromCart = (e) => {
    const clickedCarId = e.target.parentNode.id;
    let newArr = cartCars.map((x) => x);
    const carInCart = newArr.find((element) => element.id == clickedCarId);
    const index = newArr.indexOf(carInCart);
    newArr.splice(index, 1);
    console.log(newArr);
    setCartCars(newArr);
  };

  const clearCart = () => {
    setCartCars([]);
  };

  const handleAddToCart = (e) => {
    const carId = e.target.parentNode.id;
    const clickedCar = CARS.find((element) => element.id == carId);
    console.log(clickedCar);
    if (cartCars.find((element) => element.id == carId)) {
      console.log(cartCars);
      const carInCart = cartCars.find((element) => element.id == carId);
      console.log(carInCart);
      carInCart.amount = carInCart.amount + addAmount[carId];
      console.log(carInCart.amount);
      let newArray = cartCars.map((x) => x);
      setCartCars(newArray);
    } else if (!cartCars.find((element) => element.id == carId)) {
      clickedCar.amount = addAmount[carId];
      setCartCars((prevState) => [...prevState, clickedCar]);
    }
  };

  useEffect(() => {
    let counter = cartCars.length;
    for (let i = 0; i < cartCars.length; i++) {
      const element = cartCars[i];
      if (element.amount > 1) {
        for (let i = 1; i < element.amount; i++) {
          counter++;
        }
      }
    }
    setCartCount(counter);
  }, [cartCars]);

  return (
    <BrowserRouter>
      <Nav cartCount={cartCount} cartCars={cartCars} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop
              cartCars={cartCars}
              handleAddToCart={handleAddToCart}
              addAmount={addAmount}
              incrementAmount={incrementAmountInShop}
              decrementAmount={decrementAmountInShop}
              setAddAmount={setAddAmount}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartCars={cartCars}
              cartCount={cartCount}
              incrementAmount={incrementAmountInCart}
              decrementAmount={decrementAmountInCart}
              deleteFromCart={deleteFromCart}
              clearCart={clearCart}
            />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
