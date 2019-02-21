import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import Photo from '../Photo/photo';
import PostHeader from '../Post Header/postHeader';
import PostLikes from '../Post Likes/PostLikes';
import styled from 'styled-components';

const PostContainerDiv = styled.div`
    width: 640px;
    margin-bottom:25px;
    border: 1px solid lightgray;
`

const PostHeaderDiv = styled.div`
    padding: 15px;
`

const PostPhotoDiv = styled.div`
    max-width: 100%;
`

const PostLikesDiv = styled.div`
    padding: 0 15px 5px 15px;

`

const PostCommentsDiv = styled.div`
    padding: 0 15px 5px 15px;
    border-bottom: .50px solid lightgrey;
`



function PostContainer(props){
    return(
        <PostContainerDiv>
            
            <PostHeaderDiv>
                <PostHeader classname='post-header' post={props.post} />
            </PostHeaderDiv>
            
            <PostPhotoDiv>
                <Photo post={props.post} />
            </PostPhotoDiv>
            
            <PostLikesDiv>
                <PostLikes post={props.post} />
            </PostLikesDiv>
            
            <PostCommentsDiv>
                <CommentSection post={props.post} />
            </PostCommentsDiv>

        </PostContainerDiv>     
    );
}


export default PostContainer;

