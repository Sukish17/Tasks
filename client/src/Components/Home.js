import { Component } from 'react'


import {v4} from 'uuid'

import './A2.css'

import Comment from './Comment'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Home extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentsList: [],
    addressInput:'',
    numberInput:''
  }

  deleteComment = commentId => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== commentId),
    })
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  renderCommentsList = () => {
    const {commentsList} = this.state

    return commentsList.map(eachComment => (
      <Comment
        key={eachComment.id}
        commentDetails={eachComment}
        toggleIsLiked={this.toggleIsLiked}
        deleteComment={this.deleteComment}
      />
    ))
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput,addressInput,numberInput} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      address:addressInput,
      number:numberInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
      addressInput:'',
      numberInput:''
    }))
  }

  onChangeCommentInput = event => {
    this.setState({
      commentInput: event.target.value,
    })
  }

  onChangeNameInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }
  onAddressInput = event => {
    this.setState({
      addressInput: event.target.value,
    })
  }
  onNumberInput = event => {
    this.setState({
      numberInput: event.target.value,
    })
  }

  render() {
    const {nameInput, commentInput, addressInput,numberInput} = this.state

    return (
      <>
      <div className="app-container">
        <div className="comments-container">
          <h1 className="app-heading">Address</h1>
          <div className="comments-inputs">
            <form className="form" onSubmit={this.onAddComment}>
              <p className="form-description">
                Be Informed
              </p>
              <input
                type="text"
                className="name-input"
                placeholder="Name"
                value={nameInput}
                onChange={this.onChangeNameInput}
              />
              <input
                type="text"
                className="name-input"
                placeholder="Email"
                value={addressInput}
                onChange={this.onAddressInput}
              />
              <input
                type="text"
                className="name-input"
                placeholder="Number"
                value={numberInput}
                onChange={this.onNumberInput}
              />
              <textarea
                placeholder="Address"
                className="comment-input"
                value={commentInput}
                onChange={this.onChangeCommentInput}
                rows="6"
              />
              <button type="submit" className="add-button">
                Add Address
              </button>
            </form>
            <div className='ho1'> 
              <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQmcqzN9KSMx-hxPJfiB3yt59uQhN9R4IqjisfUEitJv9lbQVN14QYLsUfmgiH-AoH2VgTFMdRBaTWa9XXpU9aMV1fveYnRgRsf4peaqt_rCR_qyQ483NgjHHdhfYpOr8axyGWhk3DHw5lAUQkXl6NGMugPS7k6Apw7CUjqRMgwAv01i2_AXyRumuBfw/s16000/blank-profile-picture-hd-images-photo.JPG' alt='profile' className='zoro'/>
              <ul className="comments-list">{this.renderCommentsList()}</ul></div>
          </div>
        </div>
      </div>
    </>)
  }
}

export default Home
