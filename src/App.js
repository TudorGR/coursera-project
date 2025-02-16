import "./App.css";
import BookingPage from "./components/BookingPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function MainPage() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/reserve" element={<BookingPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
