import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import image from "../assets/96de1a8e84d5b60e17f4e8a752e3825e17a622bf.jpg";

const BookingPage = ({ availableTimes, dispatch }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const loadBookingData = () => {
    const savedBookingData = localStorage.getItem("bookingData");
    return savedBookingData ? JSON.parse(savedBookingData) : [];
  };
  const [bookingData, setBookingData] = useState(loadBookingData);

  useEffect(() => {
    if (bookingData.length > 0) {
      localStorage.setItem("bookingData", JSON.stringify(bookingData));
    }
  }, [bookingData]);

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
          dispatch={dispatch}
          bookingData={bookingData}
          setBookingData={setBookingData}
        />
        <img src={image} />
      </div>
      <div className="history-table">
        <h2>Booking History</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Guests</th>
              <th>Occasion</th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.guests}</td>
                <td>{booking.occasion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BookingPage;
