import * as actionTypes from "./types";

/* User Actions */
export const setUser = user => {
    return {
        type: actionTypes.SET_USER,
        payload: {
            currentUser: user
        }
    };
};

export const clearUser = () => {
    return {
        type: actionTypes.CLEAR_USER
    };
};




export const listNotes = () => {
    return {
        type: actionTypes.LIST_NOTES
    };
};

export const deleteNote = (id) => {
    return {
        type: actionTypes.DELETE_NOTES,
        payload: id
    };
};

export const addNewNote = (note) => {
    return {
        type: actionTypes.ADD_NOTES,
        payload: note
    };
};

export const updatedNotes = (note) => {
    return {
        type: actionTypes.EDIT_NOTES,
        payload: note
    };
};
export const completeNote = (id) => {
    return {
        type: actionTypes.COMPLETE_NOTE,
        payload: id
    };
};
