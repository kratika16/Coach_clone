import { Routes, Route } from "react-router";
import BusRoutes from "./pages/landingpage/busRoutes/index";
import AirportTransportation from "./pages/landingpage/busRoutes/index";
import Loginpage from "./pages/loginpage/Loginpage";
import Home from './pages/busRoutes/index';
import AirportHome from './pages/airportTransportation/index';
import Forgetpassword from "./pages/loginpage/forget/Forgetpassword";
import Myaccount from "./pages/myaccount/Myaccount";
import MyTrips from "./pages/myaccount/MyTrips";
import AlertPage from "./pages/myaccount/AlertPage";
import MyPayment from "./pages/myaccount/Paymethods/MyPayment";
import DeleteAlert from "./pages/myaccount/DeleteAlert";
import AlertSettings from "./pages/myaccount/AlertSettings";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<BusRoutes />} />
        <Route exact path="/bus-routes" element={<BusRoutes />} />
        <Route exact path="/airport-transportation" element={<AirportTransportation/>}/>
        <Route exact path="/login" element={<Loginpage />}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/airport" element={<AirportHome/>}/>
        <Route exact path= "/forgot-password" element={<Forgetpassword/>}/>
        <Route exact path= "/profile/myaccount" element={<Myaccount/>}/>
        <Route exact path= "/profile/mytickets" element={<MyTrips/>}/>
        <Route exact path= "/profile/myalerts" element={<AlertPage/>}/>
        <Route exact path= "/profile/mypaymentmethods" element={<MyPayment/>}/>
        <Route exact path= "/delete" element={<DeleteAlert/>}/>
        <Route exact path= "profile/settings" element={<AlertSettings/>}/>
      </Routes> 
      
    </>
  );
}

export default App;
