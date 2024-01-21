import axios from 'axios';
import { useState } from "react"
import { userLoginContextObj } from "./userLoginContext"
import { compareSync } from "bcryptjs";

export default function UserLoginStore({ children }) {
    const [currentUser, setCurrentUser] = useState({})
    const [loginStatus, setLoginStatus] = useState(false)
    const [error, setError] = useState();

    async function onSubmit(usersCred) {
        let response = await axios.get(`http://localhost:4000/users?email=${usersCred.email}`)
        console.log(response);
        let userList = response.data;

        if (userList.length === 0) {
            setError('*Invalid username')
        } else {
            let result = compareSync(usersCred.password, userList[0].password)
            if (result === false) {
                setError('*Invalid Password');
            } else {
                setCurrentUser(userList[0])
                setLoginStatus(true)
            }
        }
    }
    return (
        <userLoginContextObj.Provider value={[currentUser, setCurrentUser, loginStatus, setLoginStatus, error, onSubmit]}>
            {children}
        </userLoginContextObj.Provider>
    );
}