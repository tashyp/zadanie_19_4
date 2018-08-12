//reducer.js

import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';

const initialState = {
    comments: [],
    users: []
};

const app = combineReducers({
    comments,
    users
});

/*


import {ADD_COMMENT} from './actions'
import REMOVE_COMMENT = 'REMOVE_COMMENT';
import EDIT_COMMENT = 'EDIT_COMMENT';
import THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
import THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

const initialState = {
    comments: [],
    users: []
};

function reducer(state, action) {
    if (!state) {
        return initialState;
}
    return state;
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                {
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state]
            })
        default:
            return state;
    }
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_COMMENT:
            …
        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });
        default:
            return state;
    }
}

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text
                votes: 0
            }
            , ...state.comments];
    }
}
*/