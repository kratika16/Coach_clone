import { Routes, Route } from "react-router";
import BusRoutes from "./pages/busRoutes/index";
import AirportTransportation from "./pages/airportTransportation/index";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<BusRoutes />} />
        <Route
          exact
          path="/airport-transportation"
          element={<AirportTransportation />}
        />
      </Routes>
    </>
  );
}

export default App;
