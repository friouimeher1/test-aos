import { combineReducers } from "redux";
import * as actionTypes from "../actions/types";
import renderDate, { getRandomInt } from "../libs/helper";

const initialUserState = {
    currentUser: null,
    isLoading: true
};



const user_reducer = (state = initialUserState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                currentUser: action.payload.currentUser,
                isLoading: false
            };
        case actionTypes.CLEAR_USER:
            return {
                isLoading: false
            };

        default:
            return state;
    }
};



const notes = [
    { id: getRandomInt(100), title: 'Testing', description: 'testing automation and stress testing', date: renderDate(), done: true },
    { id: getRandomInt(1000), title: 'Reactjs', description: 'library javascript', date: renderDate(), done: true },
    { id: getRandomInt(50), title: 'HTML', description: 'html is markup language', date: renderDate(), done: true },
    { id: getRandomInt(5000), title: 'CSS 3', description: 'using for styling', date: renderDate(), done: false },
    { id: getRandomInt(2000), title: 'GOLANG', description: 'golang is language developed by google', date: renderDate(), done: false },
]

const initialNotesState = {
    notes,
    isLoading: true
};


const list_notes_reducer = (state = initialNotesState, action) => {
    switch (action.type) {
        case actionTypes.LIST_NOTES:
            return {
                notes: action.payload.listNotes,
                isLoading: false
            };
        case actionTypes.DELETE_NOTES:
            return {
                ...state,
                notes: state && state.notes.filter(item => item.id !== action.payload),

            };
        case actionTypes.ADD_NOTES:

            return {
                ...state,
                notes: [...state.notes, action.payload],

            };
        case actionTypes.EDIT_NOTES:

            const objIndex = state.notes.findIndex((note => note.id === action.payload.id));
            state.notes[objIndex].title = action.payload.title
            state.notes[objIndex].description = action.payload.description
            state.notes[objIndex].date = action.payload.date

            return {
                ...state,
                notes: state.notes,

            };

        case actionTypes.COMPLETE_NOTE:
            const completedNote = state.notes.map(note => {
                if (action.payload === note.id) {
                    return { ...note, done: !note.done }
                }
                return note
            })
            return {
                ...state,
                notes: completedNote,

            };


        default:
            return state;
    }
};



const rootReducer = combineReducers({
    user: user_reducer,
    notes: list_notes_reducer
});

export default rootReducer;
