import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import categoryReducer from './reducers/category';
import { jokeReducer } from './reducers/joke';
import { AppActions } from './types/actions';

const rootReducer = combineReducers({
    category: categoryReducer,
    joke: jokeReducer
});

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware( thunk as ThunkMiddleware<AppState, AppActions> ));