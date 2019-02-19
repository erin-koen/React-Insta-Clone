import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css'


class CommentSection extends Component {
    constructor(props) {
        super();
        this.state = {
            comments: props.comments,
            username: 'Erin',
            text: ''
        };
    
    }
    
    addcomment = e => {
        let newComment = {
            username: this.state.username,
            text: this.state.text,
        }
        this.setState({
            comments:[...this.state.comments, newComment],
            text:'',
        });
    };

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        });
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
              <div>
                  <form onSubmit ={this.state.addComment}>
                      <input
                          className="comment-input"
                          type="text"
                          name="text"
                          placeholder="Add a comment..."
                          value={this.state.post}
                          onChange={this.state.handleChanges}
                      />
                      <button></button>
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