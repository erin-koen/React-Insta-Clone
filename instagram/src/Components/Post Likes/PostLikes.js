import React, { Component } from 'react';
import styled from 'styled-components'

const FeedBackContainer = styled.div`

`

const FeedBackIcons = styled.div`
    margin-top:15px;
    padding-bottom: 0px;

    i {
        margin-right: 15px;
        width: 20px;
        height: 20px;
    }
`
const LikesContainer = styled.div`
    display: flex;  
    justify-content: flex-start;
    align-items: center;
    padding-bottom:0;

    h4 {
        margin-block-start: 5px;
        margin-block-end: 0;
    }
`


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
        <FeedBackContainer>
            <FeedBackIcons>
                <i onClick = {this.addLike} className='far fa-heart' data-fa-transform='grow-100'/>  
                <i className='far fa-comment' />
            </FeedBackIcons>
            <LikesContainer>
                <h4>{this.state.likes} likes</h4>
            </LikesContainer>
            
        </FeedBackContainer>
        
        );
    }
}
export default PostLikes;