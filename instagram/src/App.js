import React, { Component } from 'react';
import './App.css';
import dummyData from './Components/dummy-data';
import PostPage from './Components/PostConstainer/PostPage'


class App extends Component {
  constructor() {
    super();
    this.state = {
      postData:[],
      filterElement: '',
    };
  }

  

  filterResults = e => {
    e.preventDefault();
    if (this.state.filterElement === ''){
      this.setState({ postData: dummyData })
    } else {
      let filteredResults = this.state.postData.filter(post => post.username.includes(this.state.filterElement))
      this.setState({
        postData: filteredResults
      });
    }
  }

    handleChanges = e => {
      e.preventDefault();
      this.setState({
          [e.target.name]:e.target.value
      });
      console.log(this.state.filterElement);
    }
  

  

  render() {
    return (
      <div className="app"> 
        <PostPage />
      </div>
    );
  }

    
}

export default App;


 