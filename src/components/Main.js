import React from "react";
import image2 from "../assets/restaurant chef B.jpg";
import special1 from "../assets/greek salad.jpg";
import bike from "../assets/f21897ecfdee7d5927d1ec7b61408485ab9f6838.jpg";
import stars from "../assets/stars.png";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";

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
            <section>
              <img src={special1} />
              <div>
                <h3>Greek salad</h3>
                <p>
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
                </p>
                <p>
                  Order a delivery <img src={bike} className="bike-icon" />
                </p>
              </div>
            </section>
            <section>
              <img src={special1} />
              <div>
                <h3>Greek salad</h3>
                <p>
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
                </p>
                <p>
                  Order a delivery <img src={bike} className="bike-icon" />
                </p>
              </div>
            </section>
            <section>
              <img src={special1} />
              <div>
                <h3>Greek salad</h3>
                <p>
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
                </p>
                <p>
                  Order a delivery <img src={bike} className="bike-icon" />
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h1>Testimonials</h1>
        <div className="testimonials-content">
          <div className="testimonial">
            <img src={stars} className="stars" />
            <div>
              <img src={person1} />
              <p>Jane Morrow</p>
            </div>
            <p>
              Absolutely incredible! The food was bursting with flavor and the
              service was top-notch!
            </p>
          </div>
          <div className="testimonial">
            <img src={stars} className="stars" />
            <div>
              <img src={person2} />
              <p>Steven Round</p>
            </div>
            <p>Hands down the best meal I’ve had in a long time!</p>
          </div>
          <div className="testimonial">
            <img src={stars} className="stars" />
            <div>
              <img src={person3} />
              <p>Amanda Jones</p>
            </div>
            <p>
              From the moment we walked in, we were treated like royalty. The
              food was beyond delicious, and the portions were generous.
            </p>
          </div>
          <div className="testimonial">
            <img src={stars} className="stars" />
            <div>
              <img src={person4} />
              <p>Daniel Stefan</p>
            </div>
            <p>
              Wow! Every bite was a delight. The ambiance is warm and inviting.
            </p>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="about-content">
          <div className="about-left-content">
            <div>
              <h1>Little Lemon</h1>
              <p>Chicago</p>
            </div>
            <p>
              Little Lemon is a charming neighborhood bistro that serves simple
              food and classic cocktails in a lively but casual environment. The
              restaurant features a locally-sourced menu with daily specials.
            </p>
          </div>
          <div className="about-right-content">
            <img src={image2} className="about-image2" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
