import { SET_JOKE } from '../types/actions';
import { JokeActionTypes } from '../types/actions';
import { Joke } from '../types/joke';

const initState: Joke = {
    value: ''
};

const jokeReducer = ( state = initState, action: JokeActionTypes ): Joke => {
    switch ( action.type ) {
        case SET_JOKE:
            return action.joke
        default:
            return state;
    };
};

export { jokeReducer };