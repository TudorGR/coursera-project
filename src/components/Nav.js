import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.svg";
import hamburger from "../assets/🦆 icon _hamburger menu.svg";
import basket from "../assets/basket .svg";
import { Link } from "react-router-dom";

const Nav = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${visible ? "visible" : "hidden"}`}>
      <div className="nav-container">
        <Link to="/">
          <img src={logo} />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <Link to="/reserve">Reservation</Link>
          </li>
          <li>
            <a href="">Order Online</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
        <section>
          <img src={basket} className="basket_icon" />
          <img src={hamburger} className="hamburger_icon" />
        </section>
      </div>
    </nav>
  );
};

export default Nav;
