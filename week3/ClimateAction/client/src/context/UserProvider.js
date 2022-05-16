import { useState, createContext } from "react";
import axios from "axios";

export const UserContext = createContext()

const UserProvider = (props) => {
    const initState = {user: {}, token: ""}
    const [userState, setUserState] = useState(initState)

    const signUp = (credentials) => {
        axios.post('/auth/signup', credentials)
        .then(res => console.log(res))
        .catch(err => console.dir(err.response.data.errMsg))
    }

    const login = (credentials) => {
        axios.post('/auth/login', credentials)
        .then(res => console.log(res))
        .catch(err => console.dir(err.response.data.errMsg))
    }

    return(
        <UserContext.Provider value={ { ...userState, signUp, login }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserProvider;