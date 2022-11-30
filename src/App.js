import { Routes, Route } from "react-router";
import BusRoutes from "./Pages/landingpage/busRoutes/index";
import AirportTransportation from "./Pages/landingpage/airportRoutes/index";
import Loginpage from "./Pages/loginpage/Loginpage";
import Home from './Pages/BusRoutes/index';
import AirportHome from './Pages/airportTransportation/index';
import Forgetpassword from "./Pages/loginpage/forget/Forgetpassword";
import Myaccount from "./Pages/myaccount/Myaccount";
import MyTrips from "./Pages/myaccount/MyTrips";
import AlertPage from "./Pages/myaccount/AlertPage";
import MyPayment from "./Pages/myaccount/Paymethods/MyPayment";
import AlertSettings from "./Pages/myaccount/AlertSettings";
import CardPage from './Pages/myaccount/Paymethods/CardPage'
import Signuppage from "./Pages/loginpage/signup/Signuppage";
import SignupConfirmpage from './Pages/loginpage/signup/SignupConfirmpage';
import ProtectedRoute from "./ProtectedRoute/protectedRoute";
import { useSelector } from "react-redux";
import Section from './Components/alertSettingSection/section'
function App() {

  return (
    <>
      <Routes>

        <Route exact path= "/" element={<BusRoutes/>}/>
        <Route exact path="/bus-routes" element={<BusRoutes/>}/>
        <Route exact path="/airport_page" element={<AirportTransportation/>}/>
        <Route exact path="/home" element={
           <ProtectedRoute>
          <Home/>
          </ProtectedRoute>
        }/>
        <Route exact path="/airport-transportation" element={<AirportHome/>}/>
        <Route exact path="/login" element={
        <ProtectedRoute >
          <Loginpage/>
        </ProtectedRoute>}/>
        <Route exact path= "/forgot-password" element={<Forgetpassword/>}/>
        <Route exact path= "/profile/myaccount" element={<Myaccount/>}/>
        <Route exact path= "/profile/mytickets" element={<MyTrips/>}/>
        <Route exact path= "/profile/myalerts" element={<AlertPage/>}/>
        <Route exact path="/profile/mypaymentmethods" element= {<MyPayment/>}/>
        <Route exact path= "/profile/settings" element={<AlertSettings/>}/>
        <Route exact path= "/addcard" element={<CardPage/>}/>
        <Route exact path="/sign-up" element={<Signuppage/>}/>
        <Route exact path= "/sign-up/confirm" element={<SignupConfirmpage/>}/>
        <Route exact path= "/edit-setting/:id" element={<Section/>}/>
      </Routes> 
      
    </>
  );
}

export default App;
