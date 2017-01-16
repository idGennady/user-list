import React, { Component } from 'react';
import { Link } from 'react-router';

import { getUserById } from '../actions/userAction';

class UserForm extends Component{

    constructor(props){
        super(props);

        this.state = {
            name    : '',
            phone   : '',
            email   : '',
            website : ''
        }
    }

    componentDidMount(){
        if(this.props.params.id){
            this.props.dispatch(getUserById(this.props.params.id));

            console.log(this.props);
            this.setState({
                name    : 'name',
                phone   : 'phone',
                email   : 'email',
                website : 'website',
            })
        }
    }

    render(){
        const { name, phone, email, website } = this.state;
        return(
            <div className="user-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" id="name" value={name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" className="form-control" id="phone" value={phone} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" className="form-control" id="email" value={email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="website">Website:</label>
                        <input type="text" className="form-control" id="website" value={website} />
                    </div>
                    {
                        this.props.params.id
                            ?
                                <button type="submit" className="btn btn-success">Edit</button>
                            :
                                <button type="submit" className="btn btn-success">Add User</button>
                    }
                    &nbsp;
                    <Link to="/" className="btn btn-default">Back</Link>
                </form>
            </div>
        )
    }
}

export default UserForm;