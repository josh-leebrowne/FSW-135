import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";

const initInputs = {
    newComment: " "
}

const NewCommentForm = () => {
    const [newComment, setNewComment] = useState(initInputs)

    const {addNewComment} = useContext(UserContext)

    const handleCommentChange = (e) => {
        const {name, value} = e.target
        setNewComment(prevComments => ({
            ...prevComments,
            [name]: value
        }))
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault()
        addNewComment(newComment)
        setNewComment(initInputs)
    }

    const {commentText} = newComment

    return (
        <form onSubmit={handleCommentSubmit}>
            <input 
                type="text"
                name="commentText"
                value={commentText}
                onChange={handleCommentChange}
                placeholder="Add a comment..."/>
                <button>Submit Comment</button>
        </form>
    )
}

export default NewCommentForm;