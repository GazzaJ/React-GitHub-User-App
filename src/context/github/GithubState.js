import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    // Search GitHub Users

    // Retrieve GitHub user details

    // Retrieve the Users Github Repos

    // Clear GitHub users from the screen

    // Set the loading spinner

    return (<GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
        }}
    >
        {props.children}
    </GithubContext.Provider>
    );
};

export default GithubState;
