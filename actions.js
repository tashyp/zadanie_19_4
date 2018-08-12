//actions.js

import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text: text,
        id: uuid.v4()
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id: id,
        text: text
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        votes: +1,
        id: id
    }
}

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        votes: -1,
        id: id
    }
}

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';