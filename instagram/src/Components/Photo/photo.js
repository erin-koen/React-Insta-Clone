import React from 'react';
import PropTypes from 'prop-types';
import './photo.css';

function Photo(props){
    return(
        <img src={`${props.post.imageUrl}`} />
    );
}

export default Photo