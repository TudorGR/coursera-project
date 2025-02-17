import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div class="hero-overlay"></div>
      <div className="header-content">
        <div>
          <h1 data-testid="name">Little Lemon</h1>
          <h2>Chicago</h2>
        </div>
        <p>
          Experience delicious food in a warm and inviting atmosphere at Little
          Lemon. Enjoy fresh ingredients, expertly crafted dishes, and
          exceptional service. Book your table today!
        </p>
        <Link to="/reserve" className="reserve-btn" aria-label="On Click">
          Reserve a table
        </Link>
      </div>
    </header>
  );
};

export default Header;
