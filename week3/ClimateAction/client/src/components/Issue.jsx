import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import NewCommentForm from './NewCommentForm'

const Issue = (props) => {
    const {title, description, comments} = props
    const {deleteIssue, user: {username}, token} = useContext(UserContext)
    
    return (
        <div className="issue">
            <span className="issue-span"> 
                <h1 className="issue-title">{title}</h1>
                <h5 className="issue-user"> Posted By: {username}</h5> 
            </span>
            {token && <button onClick={deleteIssue} className='issue-delete'>Delete</button>}
            <h3 className="issue-descr">{description}</h3>
            <NewCommentForm />
            <h3 className="comments-title">Comments</h3>
            <div className="comment-container">
                <div className="comment-user">@{username}</div>
                <div className="issue-comments">{comments}</div>
            </div>
            
        </div>
    )
}
// {issues.map(issue => <Issue {...issue} key={issue._id}/>)}

export default Issue;