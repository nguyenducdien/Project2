import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {thunk} from 'redux-thunk';
import { combineReducers } from "redux";
import authReducer from './reducers/authReducer';
import productReducer from './reducers/productsReducer';
import categoriesreducer from './reducers/categoriesReducer';
import colorsReducer from './reducers/colorsReducer';
const persistConfig = {
	key: 'root',
	storage,
  }
const rootReducer = combineReducers({
	auth: authReducer,
	product: productReducer,
	categories: categoriesreducer,
	colors: colorsReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
	reducer: persistedReducer,
	
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
})
console.log(store)
export const persitor = persistStore(store)

export default store
//export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;
