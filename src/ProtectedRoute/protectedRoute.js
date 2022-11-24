import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loginpage from '../Pages/loginpage/Loginpage'
import Home from '../Pages/BusRoutes/index'
import { useEffect } from 'react'





const ProtectedRoute = ({children}) => {
   
  
  const { isAuthenticated } = useSelector((state) => state.user);
  console.log('auth',isAuthenticated);

    const navigate=useNavigate()


    useEffect(() => {
      if (isAuthenticated) {
        navigate("/home");
      }
    }, [isAuthenticated]);


  return children;
    
}

export default ProtectedRoute
