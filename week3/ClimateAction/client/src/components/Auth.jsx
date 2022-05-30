import { useState, useContext } from "react";
import AuthForm from "./AuthForm";
import { UserContext } from "../context/UserProvider.js";

const initInputs = {username: "", password: ""}

const Auth = () => {
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const {signUp, login, errMsg, resetAuthErr} = useContext(UserContext)
    
    const handleChange = (e) => {
        const {name, value} = e.target
        console.log(name, value)
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        signUp(inputs)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        login(inputs)
    }

    const toggleForm = () => {
        setToggle(prev => !prev)
        resetAuthErr()
    }
    return(
        <div className="landing-page">
            <div className="auth-container">
                <h1 className="projectitle">The Big Blue Dot</h1>
                { !toggle ?
                    <>
                        <AuthForm 
                            handleChange={handleChange}
                            handleSubmit={handleLogin}
                            inputs={inputs}
                            btnText="Login"
                            errMsg={ errMsg }
                        />
                        <p onClick={()=>  toggleForm()} className='createaccount'>Create an Account</p>   
                    </>
                    :
                    <>
                        <AuthForm 
                            handleChange={handleChange}
                            handleSubmit={handleSignUp}
                            inputs={inputs}
                            btnText="Create Account"
                            errMsg={ errMsg }
                        />
                        <p onClick={()=> toggleForm()} className='login'>Already have an account?</p>
                    </>
                }
            </div>
        </div>
    )
}

export default Auth;


