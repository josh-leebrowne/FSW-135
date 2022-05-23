import { useState, createContext } from "react";
import axios from "axios";

export const UserContext = createContext()

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const UserProvider = (props) => {
    const initState = {user: {}, token: ""}
    const [userState, setUserState] = useState(initState)

    const signUp = (credentials) => {
        axios.post('/auth/signup', credentials)
        
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => console.dir(err.response.data.errMsg))
    }

    const login = (credentials) => {
        axios.post('/auth/login', credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => console.dir(err.response.data.errMsg))
    }

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        getUserIssues()
        setUserState({ user: {}, token: "", issues: [] })
    }

    const addIssue = (newIssue) => {
        userAxios.post('/issue/user', newIssue)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                issues: [...prevState, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    const getUserIssues = () => {
        // userAxios.get('/issue/user', newIssue)
        // .then(res => {
        //     setUserState(prevState => ({
        //         ...prevState,
        //         todos: res.data
        //     }))
        // })
    }

    return(
        <UserContext.Provider value={ { ...userState, signUp, login, logout, addIssue }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserProvider;