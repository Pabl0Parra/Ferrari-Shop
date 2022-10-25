import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav-container">
      <div className="header-left-div">
        <h2>Ferrari</h2>
        <img
          className="ferrari-logo"
          alt="logo"
          src="https://www.carlogos.org/car-logos/ferrari-logo-750x1100.png"
        ></img>
      </div>
      <div className="links-div">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="shop">
          Shop
        </Link>
        <Link className="nav-link" to="about">
          About
        </Link>
        <button className="cart-button">
          <img
            src="https://img.icons8.com/dotty/45/000000/shopping-cart.png"
            alt="cart"
            className="cart-logo"
          ></img>
          <span className="cart-count">0</span>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
