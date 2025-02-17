import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("BookingForm", () => {
  const mockSetDate = jest.fn();
  const mockSetTime = jest.fn();
  const mockSetGuests = jest.fn();
  const mockSetOccasion = jest.fn();
  const mockSetBookingData = jest.fn();
  const mockDispatch = jest.fn();

  it("renders form elements", () => {
    render(
      <BookingForm
        date=""
        setDate={mockSetDate}
        time=""
        setTime={mockSetTime}
        guests={1}
        setGuests={mockSetGuests}
        occasion=""
        setOccasion={mockSetOccasion}
        availableTimes={["12:00 PM", "1:00 PM"]}
        dispatch={mockDispatch}
        bookingData={[]}
        setBookingData={mockSetBookingData}
      />
    );
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
  });

  it("handles form submission", () => {
    render(
      <BookingForm
        date="2025-02-17"
        setDate={mockSetDate}
        time="12:00 PM"
        setTime={mockSetTime}
        guests={2}
        setGuests={mockSetGuests}
        occasion="Birthday"
        setOccasion={mockSetOccasion}
        availableTimes={["12:00 PM", "1:00 PM"]}
        dispatch={mockDispatch}
        bookingData={[]}
        setBookingData={mockSetBookingData}
      />
    );
    fireEvent.click(
      screen.getByRole("button", { name: /make your reservation/i })
    );
    expect(mockSetBookingData).toHaveBeenCalled();
  });

  it("disables submit button if form is invalid", () => {
    render(
      <BookingForm
        date=""
        setDate={mockSetDate}
        time=""
        setTime={mockSetTime}
        guests={0}
        setGuests={mockSetGuests}
        occasion=""
        setOccasion={mockSetOccasion}
        availableTimes={["12:00 PM", "1:00 PM"]}
        dispatch={mockDispatch}
        bookingData={[]}
        setBookingData={mockSetBookingData}
      />
    );
    expect(
      screen.getByRole("button", { name: /make your reservation/i })
    ).toBeDisabled();
  });
});
