import React from 'react'


const authenticate = App  => Login =>
    class extends React.Component {
        constructor(){
            super();
            this.state = {
                loggedIn: false,
            }
        };
        
        componentDidMount(){
            if (localStorage.getItem('username')){
                this.setState({loggedIn: true})
            } else {
                this.setState({loggedIn: false})
            }
            console.log(this.state.loggedIn);
        };

        render(){
            if (this.state.loggedIn === false){
                return <Login />
            } else{
                return <App />;
            }             
            
        }
    };

export default authenticate