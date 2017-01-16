import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions/userAction';

import UserTable from '../components/userTable';

class Users extends Component{

    constructor(props){
        super(props);

        this.props.dispatch(fetchUsers());
    }

    render(){
        const { users } = this.props;
        return(
            <div>
                {
                    !users
                        ?
                        <div className="preloader-wrapper">
                            <div className="preloader"></div>
                        </div>
                        :
                        <UserTable users={users}/>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users : state.userReducer.users
});


export default connect(mapStateToProps)(Users);