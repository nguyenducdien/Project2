import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {thunk} from 'redux-thunk';
import { combineReducers } from "redux";
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
	auth: authReducer,
})

const store = configureStore({
	reducer : rootReducer,
	middleware:  (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
})
console.log(store)

export default store
//export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch
