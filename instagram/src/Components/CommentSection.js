import React, { Component } from 'react';
// import PropTypes from 'prop-types';

function CommentSection(props){
    return (
        <div>
            <h3>{props.username}</h3>
            <p>{props.text}</p>
        </div>
    );
}

export default CommentSection