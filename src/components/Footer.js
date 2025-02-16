import React from "react";
import image from "../assets/greek salad.jpg";

const Footer = () => {
  return (
    <footer>
      <img src={image} />
      <nav>
        <p>Navigation</p>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Reservation</a>
          </li>
          <li>
            <a href="">Order Online</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
      </nav>
      <nav>
        <p>Contact</p>
        <ul>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </nav>
      <nav>
        <p>Social Media Links</p>
        <ul>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
