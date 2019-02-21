import React from 'react';
// import './SearchBar.css';
import logo from './iglogo.png';
import styled from 'styled-components';

const SearchHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 75px;
    align-items: center;

    i {
        color: #444444;
    }
`;
 
const InstaLogoContainer = styled.div`
    max-width: 200px;
    display: flex;
    flex-direction: row;
    // justify-content: center;    
    align-items: flex-start;
    margin-left: 20px;

    img {
        width: 35%
        height: 35%;
        padding-left: 10px;
    }
    div {
        border-left: 1px solid grey;
        border-right: 1px solid grey;
    }
    i {
        width: 24px;
        height: 24px;
        padding-left: 10px;
    }
    `
const SearchForm = styled.form`
    // margin-right: 50px;
`

const ProfileLinks = styled.div`
    margin-right: 30px;;

    i {
        margin-left:15px;
    }
`    


const SearchBar = (props) => {

    return (
        <SearchHeader>
            <InstaLogoContainer>
                <i className='fab fa-instagram' />
                <div><p></p></div>
                <img className="insta-font-icon" src={logo} alt=''/>
            </InstaLogoContainer>
            <SearchForm onChange={props.filterResults} onSubmit={props.filterResults}>
                <input 
                    type="text" 
                    placeholder="SEARCH BY USERNAME"
                    name="filterElement"
                    value={props.filterElement}
                    onChange={props.handleChanges}
                />
            </SearchForm>
            <ProfileLinks>
                <i className='far fa-compass' />
                <i className='far fa-heart' />
                <i className='far fa-user' />
            </ProfileLinks>
            
        </SearchHeader>

            

    )
}

export default SearchBar;


// <input type='text' placeholder='Search...' />
// <i className='fa fa-compass' />
// <i className='fa fa-heart' />
// <i className='fa fa-user-circle' />