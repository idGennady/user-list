import React, { Component } from 'react';
import { Link } from 'react-router';

class Error extends Component{

    render(){
        return(
            <div>
                <h1>Hello world from Error page</h1>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default Error;