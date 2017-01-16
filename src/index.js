import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// containers
import Users from './containers/users';
import Error from './containers/error';

// components
import UserForm from './components/userForm';

// reducers
import userReducer from './reducers/userReducer';

const store = createStore(combineReducers({
    userReducer
}), applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState())
});

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route component={Users} path="/" />
            <Route component={UserForm}  path="/edit/:id" />
            <Route component={UserForm}  path="/add-user" />
            <Route component={Error} path="*" />
        </Router>
    </Provider>,
    document.getElementById('root')
);
