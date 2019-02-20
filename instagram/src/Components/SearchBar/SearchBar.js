import React from 'react';
import './SearchBar.css';
import logo from './instagram-1.svg';


const SearchBar = (props) => {

    return (
        <div className="search-bar-header">
            <div className="insta-logos">
                <i className='fab fa-instagram' />
                <div>|</div>
                <img className="insta-font-icon" src={logo} alt=''/>
            </div>
            <form onChange={props.filterResults} onSubmit={props.filterResults}>
                <input 
                type="text" 
                placeholder="SEARCH BY USERNAME"
                name="filterElement"
                value={props.filterElement}
                onChange={props.handleChanges}
                 />
            </form>
            <div className="profile-links">
                <i className='fa fa-compass' />
                <i className='fa fa-heart' />
                <i className='fa fa-user-circle' />
            </div>
        </div>
    )
}

export default SearchBar;


// <input type='text' placeholder='Search...' />
// <i className='fa fa-compass' />
// <i className='fa fa-heart' />
// <i className='fa fa-user-circle' />