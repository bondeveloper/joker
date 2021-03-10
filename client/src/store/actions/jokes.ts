import { Dispatch } from 'redux';

// import { useGetJoke } from '../hooks/jokes/useGetJoke';
import { AppState } from '../store';


import { SET_JOKE } from '../types/actions';
import { AppActions } from '../types/actions';


import { gql, useQuery } from '@apollo/client';
import { Joke } from '../types/joke';

const GET_JOKE = gql`
    query GetJoke {
        joke {
            value,
            url
        }
    }
`;

export const useGetJoke = ( category: string | null ): Joke => {
    console.log(category);
    const { loading, error, data } = useQuery(GET_JOKE);

    return data?.joke;
}

export const getJoke = ( category: string ) => {

    return ( dispatch: Dispatch<AppActions>, getState: () => AppState ) => {
        const joke = useGetJoke( category );
        console.log(joke);
        dispatch({
            type: SET_JOKE,
            joke: joke
        });
    };
};