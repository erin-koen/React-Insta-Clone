import React from 'react';
import './PostLikes.css';


function PostLikes(props){
    return (
        <div className='likes'>
            <h4>{props.post.likes} likes</h4>
        </div>
    );
}

export default PostLikes;