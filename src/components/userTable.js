import React, { Component } from 'react';
import { Link } from 'react-router';

class UserTable extends Component{  

    render(){
        const { users } = this.props;
        return(
            <div className="user-list">
                <h3>User List</h3>
                <div className="add-user">
                    <Link to="/add-user" className="btn btn-primary">Add user</Link>
                </div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                    <td>
                                        <Link to={`/edit/${user.id}`} className="btn btn-success">Edit</Link> &nbsp;
                                        <button className="btn btn-danger">Remove</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserTable;