import { gql, useQuery } from '@apollo/client';
import { Joke } from '../../types/joke';

const GET_JOKE = gql`
    query GetJoke {
        joke {
            value,
            url
        }
    }
`;

export const useGetJoke = ( category: string | null ): Joke => {
    const { loading, error, data } = useQuery(GET_JOKE);

    return data?.joke;
}