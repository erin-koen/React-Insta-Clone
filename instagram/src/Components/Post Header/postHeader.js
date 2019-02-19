import React from 'react';
import PropTypes from 'prop-types';
import './postHeader.css';

function PostHeader(props){
    return(
        <div className='header'>
            <img src={`${props.post.thumbnailUrl}`} alt=''/>
            <h4>{props.post.username}</h4>
            
        </div>
    )
}

PostHeader.propTypes = {
    post: PropTypes.object,
}

export default PostHeader;