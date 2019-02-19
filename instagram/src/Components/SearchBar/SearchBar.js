import React from 'react';


function SearchBar(props){
    return (
        <div className="search-bar-header">
            <div classname="insta-logos">
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><img className="insta-font-icon" /></a>
            </div>
            <form>
                <input type="text" placeholder="SEARCH" />
            </form>
            <div className="profile-links">
                <a href="#"><img className="discover-header-icon" /></a>
                <a href="#"><img classname="liked-header-icon" /></a>
                <a href="#"><img className="profile-header-icon" /></a>
            </div>
        </div>
    )
}

export default SearchBar;