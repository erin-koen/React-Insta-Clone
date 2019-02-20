import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './Components/PostConstainer/PostContainer'
import SearchBar from './Components/SearchBar/SearchBar'


class App extends Component {
  constructor() {
    super();
    this.state = {
      postData:[],
      filterElement: '',
    };
  }

  componentDidMount(){
    this.setState({ postData: dummyData });
    console.log(this.state.postData)
  }

  shouldComponentUpdate(prevState) {
    if (prevState.postData !== this.state.postData){
      return true;
    } else{
      return false;
    }
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
        <SearchBar posts={this.state.postData} filterElement ={this.state.filterElement} handleChanges={this.handleChanges} filterResults={this.filterResults} />
        {this.state.postData.map((post,index)=> {
          return (
            <PostContainer post={post} key={index} />
          )
        })}
      </div>
    );
  }

    
}

export default App;


 