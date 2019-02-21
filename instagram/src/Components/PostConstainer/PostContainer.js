import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import Photo from '../Photo/photo';
import PostHeader from '../Post Header/postHeader';
import PostLikes from '../Post Likes/PostLikes';
import styled from 'styled-components';




function PostContainer(props){
    return(
        <div className='post-container'>
            <div>
                <PostHeader classname='post-header' post={props.post} />
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

