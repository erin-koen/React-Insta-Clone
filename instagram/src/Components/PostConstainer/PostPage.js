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
                {this.state.postData.map((post,index)=> {
                    return (
                    <PostContainer post={post} key={index} />
                    )
                })}
            </React.Fragment>
            
            
        )
    }
}

export default PostPage;