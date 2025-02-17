import "./App.css";
import BookingPage from "./components/BookingPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useReducer } from "react";
import { fetchAPI } from "./apiCuzUrlNotWork.js";
import ConfirmedBooking from "./components/ConfirmedBooking.js";

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(new Date(action.payload));
    default:
      return state;
  }
};

function MainPage() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/reserve"
          element={
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
          }
        />
        <Route path="/confirm" element={<ConfirmedBooking />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
