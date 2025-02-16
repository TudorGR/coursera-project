import React from "react";

const Header = () => {
  return (
    <header>
      <div class="hero-overlay"></div>
      <div className="header-content">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </div>
        <p>
          Experience delicious food in a warm and inviting atmosphere at Little
          Lemon. Enjoy fresh ingredients, expertly crafted dishes, and
          exceptional service. Book your table today!
        </p>
        <button>Reserve a table</button>
      </div>
    </header>
  );
};

export default Header;
