//comments.js

import { ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT } from './actions';

function reducer(state = [], action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
                , ...state];

        case REMOVE_COMMENT:
            return state.filter(comment => comment.id !== action.id);

        case EDIT_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    comment.text = action.text;
                }
                return comment;
            });

        case THUMB_UP_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    comment.votes = comment.votes + 1
                }
                return comment;
            });

        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    comment.votes = comment.votes - 1
                }
                return comment;
            });

        default:
            return state;
    }
};
