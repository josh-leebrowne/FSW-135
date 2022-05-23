const AuthForm = ( { handleChange, handleSubmit, btnText, inputs } ) => {

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputs.username}
                name={'username'}
                onChange={handleChange}
                placeholder="Username"/>
            <input 
                type="text"
                value={inputs.password}
                name={'password'}
                onChange={handleChange}
                placeholder="Password"/>
                <button>{ btnText }</button>
        </form>
    )
}

export default AuthForm;