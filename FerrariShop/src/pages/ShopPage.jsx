import CARS from "../CarsData";

function Shop({
  handleAddToCart,
  cartCars,
  addAmount,
  decrementAmount,
  incrementAmount,
}) {
  return (
    <div className="shop-container">
      {CARS.map((car) => {
        return (
          <div className="car-container" key={car.id}>
            <img className="car-image" src={car.image} alt="car"></img>
            <h3 className="car-name">{car.name}</h3>
            <p className="car-description">{car.description}</p>
            <div className="addToCart-div" id={car.id}>
              <button className="addToCart-button" onClick={handleAddToCart}>
                Add To Cart
              </button>
              <div className="addToCart-amount">
                <button className="addToCart-button" onClick={decrementAmount}>
                  -
                </button>
                <span>{addAmount[car.id]}</span>
                <button className="addToCart-button" onClick={incrementAmount}>
                  +
                </button>
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
