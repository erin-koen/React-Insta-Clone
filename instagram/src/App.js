import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './Components/PostConstainer/PostContainer'
import PropTypes from 'prop-types';


class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
    };
  }


  render() {

    return (
      <div className='app'>
        {this.state.dummyData.map((post,index) => {
          return (
            <PostContainer post={post} key={index} />
            )
        }) }
      </div>
      
         
    );
  }
}
// The above loops through the dummyData array and sends the comments array from each object one at a time to PostContainer
export default App;
