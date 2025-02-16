import React from "react";
import image1 from "../assets/lemon dessert.jpg";
import image2 from "../assets/restaurant chef B.jpg";

const Main = () => {
  return (
    <main>
      <section className="highlights">
        <div className="highlights-content">
          <div className="highlights-top-part">
            <h1>This weeks specials!</h1>
            <button>Online Menu</button>
          </div>
          <div className="highlights-bottom-part">
            <section>special1</section>
            <section>special2</section>
            <section>special3</section>
          </div>
        </div>
      </section>
      <section className="testimonials"></section>
      <section className="about">
        <div className="about-content">
          <div className="about-left-content">
            <div>
              <h1>Little Lemon</h1>
              <p>Chicago</p>
            </div>
            <p>
              Welcome to Little Lemon! Our website is designed to bring the best
              of our restaurant right to your fingertips. Browse our menu, make
              reservations, and discover our story—all in one place. Whether
              you're looking for fresh Mediterranean flavors, special offers, or
              event details, our website has everything you need. Order online
              for pickup or delivery and experience the taste of Little Lemon
              from the comfort of your home.
            </p>
          </div>
          <div className="about-right-content">
            <img src={image1} className="about-image1" />
            <img src={image2} className="about-image2" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
