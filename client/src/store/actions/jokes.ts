import { Dispatch } from 'redux';

import { useGetJoke } from '../hooks/jokes/useGetJoke';
import { AppState } from '../store';


import { GET_JOKE_SUCCESS } from '../types/actions';
import { AppActions } from '../types/actions';

export const getJoke = ( category: string ) => {
    return ( dispatch: Dispatch<AppActions>, getState: () => AppState ) => {
        const joke = useGetJoke( category );
        console.log(joke);
        dispatch({
            type: GET_JOKE_SUCCESS,
            joke: joke
        });
    };
};