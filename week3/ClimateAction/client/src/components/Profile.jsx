import React, { useContext } from 'react'
import IssueList from './IssueList.jsx'
import { UserContext } from '../context/UserProvider.js'
import IssueForm from './IssueForm.jsx'

const Profile = () => {
    const {user: {username}, addIssue, issues} = useContext(UserContext)

    return (
        <div className='profile'>
            <h1 className='profile-header'>Welcome back {username}</h1>
            <h3 className='profile-issue'>Add an Issue</h3>
            <IssueForm addIssue={addIssue}/>
            <h3 className='yourissues'>Your Issues</h3>
            <IssueList issues={issues}/>
        </div>
    )
}

export default Profile;