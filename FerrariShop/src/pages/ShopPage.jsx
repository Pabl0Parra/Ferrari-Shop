import React, { useState, useEffect } from "react";
import CARS from "../CarsData";

function Shop() {
  return (
    <div className="shop-container">
      {CARS.map((car) => {
        return (
          <div className="car-container" key={car.id}>
            <img className="car-image" src={car.image} alt="car"></img>
            <h3 className="car-name">{car.name}</h3>
            <p className="car-description">{car.description}</p>
            <div className="addToCart-div">
              <button className="addToCart-button">Add To Cart</button>
              <div className="addToCart-amount">
                <button className="addToCart-amount-button">-</button>
                <span>1</span>
                <button className="addToCart-button">+</button>
              </div>
            </div>
            <div className="line"></div>
          </div>
        );
      })}
    </div>
  );
}

export default Shop;
