import { gql, useQuery } from '@apollo/client';

const GET_JOKE = gql`
    query GetJoke( $category: String ) {
        joke( category: $category) {
            value,
            url
        }
    }
`;

export const useGetJoke = ( category: string | null ): any => {

    const filters = !category || category == '' || category == null || category == 'random' ? undefined : {
        variables: { category },
        notifyOnNetworkStatusChange: true,
    }
    return useQuery(GET_JOKE, filters);
}