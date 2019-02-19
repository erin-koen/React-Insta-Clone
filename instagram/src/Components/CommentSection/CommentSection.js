import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css'

function CommentSection(props){
    return (

      <div>          
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
        <div>
            <form>
                <input
                    className="comment-input"
                    type="text"
                    name="text"
                    placeholder="Add a comment..."
                    value={props.post}
                    onChange={props.handleChanges}
                />
                <button></button>
            </form>
        </div>
      </div>
    );
}

CommentSection.propTypes = {
    post: PropTypes.object,
}

export default CommentSection