import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css'

function CommentSection(props){
    return (
      <div> 
          {props.post.comments.map(comment => {
              return (
                <div className='individual-comment'>
                    <h4>{comment.username}</h4>
                    <p>{comment.text}</p>
                </div>                
              );
          })}
          
      </div>
    );
}

// CommentSection.propTypes = {
//     props: PropTypes.object,
//     props.post.comments: PropTypes.array,
// }

export default CommentSection