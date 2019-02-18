import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css'


function PostContainer(props){
    return(
        <div className='post-container'>
            <div className='post-comments'>
                <CommentSection post={props.post} />
            </div>
        </div>
        

        
    );
}

//PostContainer creates one div at a time for each post's comments. It sends each post's comments as an array to the comment section, which put each comment in a div. Those comment <divs> are wrapped in the PostContainer <div> and I assume this is where pics will go. 
PostContainer.propTypes = {
    props: PropTypes.object,
}

export default PostContainer;

