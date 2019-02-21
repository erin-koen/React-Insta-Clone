import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Username from '../Styles-Reusables/styles-reusables'

const StyledPostHeader = styled.div`
    display: flex;
    flex-direction: row;    
    align-items: center;

    img {
        border-radius: 50%;
        width: 48px;
        height: 48px;
        margin: 10px;
    }
`


function PostHeader(props){
    return(
        <StyledPostHeader>
            <img src={`${props.post.thumbnailUrl}`} alt=''></img> 
            <Username bold>{props.post.username}</Username>
        </StyledPostHeader>
    )
}

PostHeader.propTypes = {
    post: PropTypes.object,
}

export default PostHeader;