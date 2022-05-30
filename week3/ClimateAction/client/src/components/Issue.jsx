import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import NewCommentForm from './NewCommentForm'

const Issue = (props) => {
    const {title, description, comments} = props
    const {deleteIssue} = useContext(UserContext)
    
    return (
        <div className="issue">
            <h1>{title}</h1>
            <h3>{description}</h3>
            <div>{comments}</div>
            <button onClick={deleteIssue}>Delete</button>
            <NewCommentForm />
        </div>
    )
}
// {issues.map(issue => <Issue {...issue} key={issue._id}/>)}

export default Issue;