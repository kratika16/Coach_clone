
import { map } from "lodash";
import { COACH_CLONE_USERS,COACH_CLONE_USER,ACCOUNT_DETAIL} from "./constants";


const setUsers = (data) => {
    let users = localStorage.getItem(COACH_CLONE_USERS);
    users = users ? JSON.parse(users) : [];
    users = [...users, data];
    localStorage.setItem(COACH_CLONE_USERS, JSON.stringify(users));
}
const updateUser = (data) => {
    let users = localStorage.getItem(COACH_CLONE_USERS);
    users = users ? JSON.parse(users) : [];
    users = map(users, (user) => {
        if(user.id === data.id) {
            return data;
        }
        return user;
    });
    localStorage.setItem(COACH_CLONE_USERS, JSON.stringify(users));
}


const getUser = (data) => {
    let users = localStorage.getItem(COACH_CLONE_USERS);
    users = users ? JSON.parse(users) : [];
    return users.find((user) => user.email === data.email && user.password === data.password);
}

const setLoginAuth=(data)=>{
    localStorage.setItem(COACH_CLONE_USER,JSON.stringify(data));
}

const getLoginAuth = () => {
    let user=localStorage.getItem(COACH_CLONE_USER);
    user=user ? JSON.parse(user):{};
    return getUser(user);
}

const deleteLoginAuth=()=>{
    localStorage.removeItem(COACH_CLONE_USER);
}

// const setMyAccount=(details)=>{
//     let accountdetails= localStorage.getItem(ACCOUNT_DETAIL);
//     accountdetails = accountdetails? JSON.parse(accountdetails) : [];
//     accountdetails =[...accountdetails,details];
//     localStorage.setItem(ACCOUNT_DETAIL, JSON.stringify(accountdetails));
// }

// const getMyAccount=(details)=>{
//     let accountdetails=localStorage.getItem(ACCOUNT_DETAIL);
//     accountdetails=accountdetails?JSON.parse(accountdetails):[];
//     return accountdetails.find((account) => account.accountid === details.accountid );
// }

export {setUsers, getUser,setLoginAuth,getLoginAuth,deleteLoginAuth, updateUser}