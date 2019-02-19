import React from 'react';
import './SearchBar.css';
import logo from './instagram-1.svg';


const SearchBar = () => {
    return (
        <div className="search-bar-header">
            <div className="insta-logos">
                <i className='fab fa-instagram' />
                <div>|</div>
                <img className="insta-font-icon" src={logo} alt=''/>
            </div>
            <form>
                <input type="text" placeholder="SEARCH" />
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