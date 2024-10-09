import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import Home from "./routes/Home";
import TripDetailsPage from "./routes/TripDetailsPage";

function App() {
  return (
    <div>
      <div className="px-5 py-2 flex items-center space-x-4">
        <img src="/img/logo.jpeg" width="300px" className="rounded-xl" />
        {/* <h2 className="text-4xl capitalize font-bold text-red-600">Choose your next trip!</h2> */}
      </div>

      <Router>
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<Home />} />

          {/* Trip Details Page Route */}
          <Route path="/trip-details/:id" element={<TripDetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
