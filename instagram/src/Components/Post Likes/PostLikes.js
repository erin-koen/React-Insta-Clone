import React, { Component } from 'react';
import './PostLikes.css';

class PostLikes extends Component {
    constructor(props) {
        super();
        this.state ={
            likes: props.post.likes,
            increment: 1,
        };
    }

    addLike = e => {
        e.preventDefault();
        let newLikeTotal = this.state.likes + this.state.increment
        console.log(newLikeTotal);
        this.setState({
            likes: newLikeTotal,
            increment: 1,
        })
    }


render(){
    return (
        <div>
            <div className="like-comment-icons">
                 <i onClick = {this.addLike} className='far fa-heart' data-fa-transform='grow-100'/>  
                 <i className='far fa-comment' />
            </div>
            <div className='likes'>
                <h4>{this.state.likes} likes</h4>
            </div>
        </div>
        
        );
    }
}
export default PostLikes;