import "./App.css";
import { FlightBooking } from "./Pages/FlightBooking";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Navbar />
      <FlightBooking />
      <Footer />
    </div>
  );
}

export default App;
