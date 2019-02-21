import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import Photo from '../Photo/photo';
import PostHeader from '../Post Header/postHeader';
import PostLikes from '../Post Likes/PostLikes';
import styled from 'styled-components';

const PostContainerDiv = styled.div`
    width: 640px;
    margin-bottom:25px;
    border: 1px solid lightgray;
`


function PostContainer(props){
    return(
        <PostContainerDiv>
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
        </PostContainerDiv>     
    );
}


export default PostContainer;

