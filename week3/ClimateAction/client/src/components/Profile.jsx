import React, { useContext } from 'react'
import IssueList from './IssueList.jsx'
import { UserContext } from '../context/UserProvider.js'
import IssueForm from './IssueForm.jsx'

const Profile = () => {
    const {user: {username}, addIssue, issues} = useContext(UserContext)

    return (
        <div className='proflie'>
            <h1>Welcome back {username}</h1>
            <h3>Add an Issue</h3>
            <IssueForm addIssue={addIssue}/>
            <h3>Your Issues</h3>
            <IssueList issues={issues}/>
        </div>
    )
}

export default Profile;