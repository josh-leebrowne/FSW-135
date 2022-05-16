const AuthForm = ( { handleChange, handleSubmit, btnText, inputs } ) => {
    // const {
    //     handleChange,
    //     handleSubmit,
    //     btnText,
    //     inputs: {
    //         username,
    //         password
    //     }
    // } = props

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputs.username}
                name={inputs.username}
                onChange={handleChange}
                placeholder="Username"/>
            <input 
                type="text"
                value={inputs.password}
                name={inputs.password}
                onChange={handleChange}
                placeholder="Password"/>
                <button>{ btnText }</button>
        </form>
    )
}

export default AuthForm;