import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
    };
  }


  render() {

    return (
      <div>

        {this.state.dummyData.map(post => {
          return (
            <PostContainer props={post} key={post.likes} />
            )
        }) }
      </div>
      
         
    );
  }
}

export default App;
