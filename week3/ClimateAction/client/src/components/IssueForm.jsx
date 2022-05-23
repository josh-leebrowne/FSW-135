import React, {useState} from "react";

const initInputs = { 
    title: "",
    description: "",
    comments: ""
}

const IssueForm = ({addIssue}) => {
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addIssue(inputs)
        setInputs(initInputs)
    }

    const {title, description, comments} = inputs

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Title"/>
            <input
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="Description"/>
            <input 
                type="text"
                name="Comment"
                value={comments}
                onChange={handleChange}
                placeholder="Comment"/>
                <button>Add Issue</button>
        </form>
    )
}

export default IssueForm;