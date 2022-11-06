import { useState, useEffect } from "react";

export const Validation = ({ email = "", password = "",requiredLength=8, }) => {
const [validEmail,setValidEmail]=useState(false);
const [validLength, setValidLength] = useState(false);
const [hasNumber, setHasNumber] = useState(false);
const [upperCase, setUpperCase] = useState(false);
const [lowerCase, setLowerCase] = useState(false);
const [specialChar, setSpecialChar] = useState(false);



useEffect(() => {
    setValidEmail(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
    setValidLength( password == '' ? true : password.length >= requiredLength ? true : false);
    setUpperCase(password.toLowerCase() !== password);
    setLowerCase(password.toUpperCase() !== password);
    setHasNumber(/\d/.test(password));
    setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(password));
      
    }, [email,password, requiredLength]);

    return [validEmail,validLength, hasNumber, upperCase, lowerCase, specialChar];

};
