import React from "react";

const Issue = (props) => {
    const {title, description, comments} = props
    
    return (
        <div className="issue">
            <h1>{title}</h1>
            <h3>{description}</h3>
            <div>{comments}</div>
        </div>
    )
}

export default Issue;