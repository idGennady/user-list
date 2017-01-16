export const SET_USERS      = 'SET_USERS';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';

export const fetchUsers = () => dispatch => {
    return fetch('/api/users')
        .then(response => response.status === 200 ? response.json() : null)
        .then(json => dispatch(setUsers(json)))
};

export const getUserById = (id) => {
    return {
        type: GET_USER_BY_ID,
        id
    }
};

const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
};