import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './Components/PostConstainer/PostContainer'
import SearchBar from './Components/SearchBar/SearchBar'


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
        <SearchBar />
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
