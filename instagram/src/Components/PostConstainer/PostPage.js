import React, { Component } from 'react';
import dummyData from '../dummy-data'
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostPage extends Component {
    constructor(){
        super();
        this.state = {
            postData: [],
            filterElement: '',
        };
    }

    componentDidMount(){
        this.setState({ postData: dummyData });
        
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
        console.log(this.state.filterElement);
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
        
    }
  
    
  

    render() {
        return (
            <React.Fragment>
                <SearchBar 
                    posts={this.state.postData} 
                    filterElement={this.state.filterElement}
                    handleChanges={this.handleChanges}
                    filterResults={this.filterResults}
                />
                {this.state.postData.map((post)=> {
                    return (
                    <PostContainer post={post} key={post.timestamp} />
                    )
                })}
            </React.Fragment>
            
            
        )
    }
}

export default PostPage;