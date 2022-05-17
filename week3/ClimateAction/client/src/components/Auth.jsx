import { useState, useContext } from "react";
import AuthForm from "./AuthForm";
import { UserContext } from "../context/UserProvider.js";

const initInputs = {username: "", password: ""}

const Auth = () => {
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const {signup, login} = useContext(UserContext)
    
    const handleChange = (e) => {
        const {name, value} = e.target
        console.log(name, value)
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        signup(inputs)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        login(inputs)
    }

    return(
        <div className="auth-container">
            <h1>Climate Change Project</h1>
            { !toggle ?
                <>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleSignUp}
                        inputs={inputs}
                        btnText="Create Account"
                    />
                    <p onClick={()=> setToggle(prev => !prev)}>Already have an account?</p>
                </>
                :
                <>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                        inputs={inputs}
                        btnText="Login"
                    />
                    <p onClick={()=> setToggle(prev => !prev)}>Create an Account</p>
                </>
            }
        </div>
    )
}

export default Auth;
