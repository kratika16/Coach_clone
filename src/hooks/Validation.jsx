export const useValidation = () => {
    const isValidEmail = (email) => {
        console.log('em',email);
        return email && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }
    const isValidPassword = (password) => {
        return password && /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password);
    }

const isValidName=(firstName)=>{
    
    return firstName &&  firstName.length >= 1;
}


const isValidLastname=(lastName)=>{
    
    return lastName &&  lastName.length >= 1;
}

const isValidZipcode=(zip)=>{
    
    return zip &&  zip.length == 5;
}
const isValidCardnum=(cardnum)=>{
    
    return cardnum && cardnum.length ==16;
}

const isValidPnumber=(pnumber)=>{
    
    return pnumber && pnumber.length ==10 ;
}
    return {isValidEmail, isValidPassword,isValidName,isValidLastname,isValidZipcode,isValidCardnum,isValidPnumber}
}


