import React, { useState } from "react";
import { submitAPI } from "../apiCuzUrlNotWork.js";
import { useNavigate } from "react-router-dom";

const BookingForm = ({
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  availableTimes,
  dispatch,
  bookingData,
  setBookingData,
}) => {
  const navigate = useNavigate();
  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: "UPDATE_TIMES", payload: e.target.value });
  };
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleGuestsChange = (e) => setGuests(e.target.value);
  const handleOccasionChange = (e) => setOccasion(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBooking = {
      id: Date.now(),
      date,
      time,
      guests,
      occasion,
    };
    setBookingData([...bookingData, newBooking]);
    alert(
      `Reservation details: Date - ${date}, Time - ${time}, Guests - ${guests}, Occasion - ${occasion}`
    );
    navigate("/confirm");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "250px", gap: "20px" }}
      aria-labelledby="booking-form-title"
    >
      <label htmlFor="res-date">Choose Date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        aria-required="true"
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={handleTimeChange}
        aria-live="polite"
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange}
        aria-required="true"
      />

      <label htmlFor="occasion" onChange={handleOccasionChange}>
        Occasion
      </label>
      <select
        id="occasion"
        value={occasion}
        onChange={handleOccasionChange}
        aria-required="true"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
