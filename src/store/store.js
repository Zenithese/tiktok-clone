import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//     whitelist: ['session']
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

let middleware = [thunk, logger];

const configureStore = () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(...middleware)
    )
    const persistor = persistStore(store);
    return { store, persistor };
};

export default configureStore;