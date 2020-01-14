import { combineReducers } from "redux";

const INITIAL_STATE = {
    currOurService: null,
    ourServices: []
};


export default function ourServiceReducer(state = INITIAL_STATE, action) { //action : {type: 'SET_CURR_CONTACT', contact:contact}
    switch (action.type) {
        case 'SET_CURR_OUR_SERVICE':
            // state.currContact = action.contact //WRONG BECAUSE NOT IMMUTABLE
            return {

                ...state,
                currOurService: action.ourService

            };
        case 'SET_OUR_SERVICES':
            return {
                ...state,
                ourServices: action.ourServices
            };
        // case 'UPDATE_CONTACT':
        //     const idx = state.contacts.findIndex(currContact => {
        //         return currContact.id === action.contact.id;
        //     });
        //     return {
        //         ...state,
        //         contacts: [
        //             ...state.contacts.slice(0, idx),
        //             action.contact,
        //             ...state.contact.slice(idx + 1)
        //         ]

        //     };
        default:
            return state;
    }
}