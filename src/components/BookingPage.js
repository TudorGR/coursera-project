import React, { useState } from "react";
import BookingForm from "./BookingForm";
import image from "../assets/96de1a8e84d5b60e17f4e8a752e3825e17a622bf.jpg";

const BookingPage = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  return (
    <section className="form">
      <h1>Book a Reservation</h1>
      <div>
        <BookingForm
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          guests={guests}
          setGuests={setGuests}
          occasion={occasion}
          setOccasion={setOccasion}
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
        />
        <img src={image} />
      </div>
    </section>
  );
};

export default BookingPage;
