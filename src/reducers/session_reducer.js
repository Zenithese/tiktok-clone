import { combineReducers } from "redux";
import auth from './auth_reducer';
import security from './security_reducer';
import AsyncStorage from '@react-native-community/async-storage'
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'session',
  storage: AsyncStorage,
  whitelist: ['auth']
};

const sessionReducer = combineReducers({
  auth,
  security
})

export default persistReducer(persistConfig, sessionReducer);

// import {
//   RECEIVE_CURRENT_USER,
//   LOGOUT_CURRENT_USER,
// } from '../actions/session_actions';

// const _nullUser = Object.freeze({
//   id: null,
//   token: null,
// });

// const sessionReducer = (state = _nullUser, action) => {
//   Object.freeze(state);
//   switch (action.type) {
//     case RECEIVE_CURRENT_USER:
//       return { id: action.currentUser.id, token: action.currentUser.session_token };
//     case LOGOUT_CURRENT_USER:
//       return _nullUser;
//     default:
//       return state;
//   }
// };

// export default sessionReducer;
