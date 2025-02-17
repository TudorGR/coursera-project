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

  const isDateAndTimeBooked = (selectedDate, selectedTime) => {
    return bookingData.some(
      (booking) =>
        booking.date === selectedDate && booking.time === selectedTime
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isDateAndTimeBooked(date, time)) {
      alert("This date and time are already booked. Please choose another.");
      return;
    }

    const newBooking = {
      id: Date.now(),
      date,
      time,
      guests,
      occasion,
    };
    setBookingData([...bookingData, newBooking]);
    navigate("/confirm");
  };

  const isFormValid = () => {
    return date && time && guests >= 1 && guests <= 10 && occasion;
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
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={handleTimeChange}
        aria-live="polite"
        required
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
        required
      />

      <label htmlFor="occasion" onChange={handleOccasionChange}>
        Occasion
      </label>
      <select
        id="occasion"
        value={occasion}
        onChange={handleOccasionChange}
        aria-required="true"
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your reservation"
        disabled={!isFormValid()}
        aria-label="On Click"
      />
    </form>
  );
};

export default BookingForm;
