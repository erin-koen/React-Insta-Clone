import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import Photo from '../Photo/photo';
import PostHeader from '../Post Header/postHeader'
import PostLikes from '../Post Likes/PostLikes'
import AddComment from '../AddComment/AddComment'

function PostContainer(props){
    return(
        <div className='post-container'>
            <div className='post-header'>
                <PostHeader post={props.post} />
            </div>

            <div className='post-photo'>
                <Photo post={props.post} />
            </div>

            <div className='post-likes'>
                <PostLikes post={props.post} />
            </div>

            <div className='post-comments'>
                <CommentSection post={props.post} />
            </div>

        </div>
        

        
    );
}


export default PostContainer;

