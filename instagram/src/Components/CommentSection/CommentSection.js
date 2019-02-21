import React, { Component } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import Username from '../Styles-Reusables/styles-reusables'
import moment from 'moment';


const Comment = styled.div`

    display: flex;  
    justify-content: flex-start;
    align-items: center;    

    
    p {
        margin: 0 0 0 5px;
    }
 
`



const CommentForm = styled.form`
    width: 100%;
    margin-top: 10px;
    border-top: .25px solid lightgrey;
    padding-top:5px;
    display: flex;
    flex-direction:row;
    justify-content: space-between;

    input{
        border: none;
        font-size: 16px;
        font-weight: bold;
        width: 500px;
    }

    button{
        // width: 80px;
        border: none;
    }
`


class CommentSection extends Component {
    constructor(props) {
        super();
        this.state = {
            comments: props.post.comments,
            username: 'Erin',
            text: '',
            timestamp: moment().format(props.post.timestamp),
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
        let tempUserName = localStorage.getItem('username');
        this.setState({
            username: tempUserName,
            [e.target.name]:e.target.value,
            
        });
        console.log(this.state.text);
    }

    render(){
        return (
            <div>          
                <div>
                    {this.state.comments.map((comment,index) => {
                        return (
                            <Comment key={index}>
                                <Username>{comment.username}</Username>
                                <p>{comment.text}</p>
                            </Comment>              
                        );
                    })} 
                </div>
              <div>
                  {moment(this.state.timestamp).fromNow()}
              </div>
              <CommentForm onSubmit={this.addComment}>
                    <input
                        className="comment-input"
                        type="text"
                        name="text"
                        value={this.state.text}  
                        placeholder="Add a comment..."
                        onChange={this.handleChanges}                     
                    />
                    <button type="submit" onClick={this.addComment}><i className="fas fa-ellipsis-h" /></button>
              </CommentForm>
            </div>
          );
      }
}        





  

CommentSection.propTypes = {
    post: PropTypes.object,
}

export default CommentSection