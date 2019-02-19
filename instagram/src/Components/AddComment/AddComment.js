import React from 'react';
import './AddComment.css';

function AddComment(props){
    return (
        <form>
            <input
                className="comment-input"
                type="text"
                // name="comment"
                placeholder="Add a comment..."
                // value={props.comments.text}
                // onChange={props.handleChanges}
            />
            <button></button>
        </form>
        
    );

}

export default AddComment