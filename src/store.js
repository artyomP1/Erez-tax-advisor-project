import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import ourServiceReducer from './modules/OurServices/reducers';
// import userReducer from './modules/user/reducer'

const rootReducer = combineReducers({
    ourService: ourServiceReducer,
    // user: userReducer
});



const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
export default store;