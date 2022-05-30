import { useState, createContext } from "react";
import axios from "axios";

export const UserContext = createContext()

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    console.log(token)
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const UserProvider = (props) => {
    const initState = {
        user: {}, 
        token: "", 
        issues: [], 
        errMsg: ''
    }

    const handleAuthErr = (errMsg) => {
        setUserState(prevState =>({ ...prevState, errMsg}))
    }

    const resetAuthErr = () => {
        setUserState(prevState =>({ ...prevState, errMsg: " "}))
    }

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
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    const login = (credentials) => {
        axios.post('/auth/login', credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            getUserIssues()
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({ user: {}, token: "", issues: [] })
    }

    const addIssue = (newIssue) => {
        userAxios.post('/api/issue', newIssue)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                issues: [...prevState.issues, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    const getUserIssues = () => {
        userAxios.get('/api/issue/user')
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                issues: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    const deleteIssue = (issueId) => {
        userAxios.delete(`/api/issue/${issueId}`)
        .then(res => {
            setUserState(prevState => prevState.filter(issue => issue._id !== issueId))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    const addNewComment = (newComment) => {
        // userAxios.post('/api/issue/comment', newComment)
        // .then(res => {
        //     setUserState(prevState => ({
        //         ...prevState,
        //         issues: [...prevState.issues, res.data]
        //     }))
        // })
        // .catch(err => console.log(err.response.data.errMsg))
    }

    return(
        <UserContext.Provider value={ { ...userState, signUp, login, logout, addIssue, getUserIssues, deleteIssue, resetAuthErr, addNewComment }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserProvider;