import React from 'react';
import PropTypes from 'prop-types';
import './photo.css';

function Photo(props){
    return(
        <img src={`${props.post.imageUrl}`} alt='' />
    );
}

Photo.propTypes = {
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

export default Photo