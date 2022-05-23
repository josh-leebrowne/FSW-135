import React from 'react'
import Issue from './Issue'

const IssueList = (props) => {
    const {issues} = props

    return(
        <div className='issuelist'>
            {issues.map(issue => <Issue {...issue} key={issue._id}/>)}
        </div>
    )
}

export default IssueList;