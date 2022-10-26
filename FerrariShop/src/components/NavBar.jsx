import { NavLink } from "react-router-dom";

function Nav({ cartCount, cartCars }) {
  return (
    <nav className="nav-container">
      <div className="header-left-div">
        <h2>
          <NavLink to="/" className="ferrari-logo">
            Ferrari
          </NavLink>
        </h2>
        <img
          className="ferrari-logo"
          alt="logo"
          src="https://www.carlogos.org/car-logos/ferrari-logo-750x1100.png"
        ></img>
      </div>
      <div className="links-div">
        <NavLink className="nav-link underline" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link underline" to="shop">
          Shop
        </NavLink>
        <NavLink className="cartButton" to={"cart"}>
          <img
            src="https://img.icons8.com/dotty/45/000000/shopping-cart.png"
            alt="cart"
            className="cartLogo"
          ></img>
          <span className="cartCount">{cartCount}</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
