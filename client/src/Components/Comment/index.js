
import './index.css'

const Comment = props => {
  const {commentDetails} = props
  const {id, name, comment, address,number} = commentDetails


  

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-container">
      
        <div>
          <div className="username-time-container">
            <p className="username">Name : {name}</p>
          </div>
          <p className="username">Email : {address}</p>
          <p className="username">Number : {number}</p>
          <p className="username">address : {comment}</p>
          
        <button
          className="button"
          type="button"
          onClick={onDeleteComment}
          data-testid="delete"
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
        </div>
      </div>
\      
     
    </li>
  )
}

export default Comment
