const AuthForm = (props) => {
    const {
        handleChange,
        handleSubmit,
        btnText,
        inputs: {
            username,
            password
        }
    } = props

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                name={username}
                onChange={handleChange}
                placehholder={username}/>
            <input 
                type="text"
                value={password}
                name={username}
                onChange={handleChange}
                placeholder={username}/>
                <button>{ btnText }</button>
        </form>
    )
}

export default AuthForm;