import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css'


class CommentSection extends Component {
    constructor(props) {
        super();
        this.state = {
            comments: props.post.comments,
            username: 'Erin',
            text: ''
        };
    
    }
    
    addComment = e => {
        e.preventDefault();
        let newComment = {
            username: this.state.username,
            text: this.state.text,
        }
        console.log(newComment);
        this.setState({
            comments:[...this.state.comments, newComment],
            text: '',
        });
    };

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        });
        console.log(this.state.text);
    }

    render(){
        return (
            <div>          
              <div> 
                  {this.state.comments.map((comment,index) => {
                      return (
                          <div className='individual-comment' key={index}>
                              <h4>{comment.username}</h4>
                              <p>{comment.text}</p>
                          </div>                
                      );
                  })}
              </div>
              <div className="comment-form">
                  <form onSubmit ={this.addComment}>
                      <input
                          className="comment-input"
                          type="text"
                          name="text"
                          value={this.state.text}  
                          placeholder="Add a comment..."
                          onChange={this.handleChanges}                     
                      />
                      <button type="submit" onClick={this.addComment}>. . .</button>
                  </form>
              </div>
            </div>
          );
      }
}        





  

CommentSection.propTypes = {
    post: PropTypes.object,
}

export default CommentSection