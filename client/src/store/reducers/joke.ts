import { Action, Dispatch } from 'redux';

import { GET_JOKE_SUCCESS } from '../types/actions';
import { JokeActionTypes } from '../types/actions';
import { Joke } from '../types/joke';

const initState: Joke = {
    value: ''
};


const jokeReducer = ( state = initState, action: JokeActionTypes ): Joke => {
    switch ( action.type ) {
        case GET_JOKE_SUCCESS:
            return action.joke
        default:
            return state;
    };
};

export { jokeReducer };