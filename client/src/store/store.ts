import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import categoryReducer from './reducers/category';
import { AppActions } from './types/actions';

const rootReducer = combineReducers({
    category: categoryReducer
});

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware( thunk as ThunkMiddleware<AppState, AppActions> ));