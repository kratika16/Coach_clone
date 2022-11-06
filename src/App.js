import { Routes, Route } from "react-router";
import BusRoutes from "./pages/landingpage/busRoutes/index";
import AirportTransportation from "./pages/landingpage/airportRoutes/index";
import Loginpage from "./pages/loginpage/Loginpage";
import Home from './pages/busRoutes/index';
import AirportHome from './pages/airportTransportation/index';
import Forgetpassword from "./pages/loginpage/forget/Forgetpassword";
import Myaccount from "./pages/myaccount/Myaccount";
import MyTrips from "./pages/myaccount/MyTrips";
import AlertPage from "./pages/myaccount/AlertPage";
import MyPayment from "./pages/myaccount/paymethods/MyPayment";
import AlertSettings from "./pages/myaccount/AlertSettings";
import MyPastTrips from './pages/myaccount/MyPastTrips';
import AddCardPage from './pages/myaccount/paymethods/CardPage';
import Signuppage from "./pages/loginpage/signup/Signuppage";
import SignupConfirmpage from './pages/loginpage/signup/SignupConfirmpage';
function App() {
  return (
    <>
      <Routes>
        <Route exact path= "/" element={<BusRoutes/>}/>
        <Route exact path="/bus-routes" element={<BusRoutes/>}/>
        <Route exact path="/airport_page" element={<AirportTransportation/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/airport-transportation" element={<AirportHome/>}/>
        <Route exact path="/login" element={<Loginpage />}/>
        <Route exact path= "/forgot-password" element={<Forgetpassword/>}/>
        <Route exact path= "/profile/myaccount" element={<Myaccount/>}/>
        <Route exact path= "/profile/mytickets" element={<MyTrips/>}/>
        <Route exact path="profile/mypasttickets" element={<MyPastTrips/>}/>
        <Route exact path= "/profile/myalerts" element={<AlertPage/>}/>
        <Route exact path="/profile/mypaymentmethods" element= {<MyPayment/>}/>
        <Route exact path= "/profile/settings" element={<AlertSettings/>}/>
        <Route exact path= "/addcard" element={<AddCardPage/>}/>
        <Route exact path="/sign-up" element={<Signuppage/>}/>
        <Route exact path= "/sign-up/confirm" element={<SignupConfirmpage/>}/>
      </Routes> 
      
    </>
  );
}

export default App;
