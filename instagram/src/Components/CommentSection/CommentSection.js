import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css'

function CommentSection(props){
    return (
      <div> 
          {props.post.comments.map((comment,index) => {
              return (
                <div className='individual-comment' key={index}>
                    <h4>{comment.username}</h4>
                    <p>{comment.text}</p>
                </div>                
              );
          })}
          
      </div>
    );
}

CommentSection.propTypes = {
    post: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            imageUrl: PropTypes.string,
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            comments: PropTypes.array,
        })
        
    )
}
export default CommentSection