import { gql, useQuery } from '@apollo/client';

const GET_JOKE = gql`
    query GetJoke( $category: String ) {
        joke( category: $category) {
            value,
            url,
            icon_url
        }
    }
`;

export const useGetJoke = ( category: string ): any => {

    const filters = !category || category === '' || category === null ? undefined : {
        variables: { category },
        notifyOnNetworkStatusChange: true,
    }
    return useQuery(GET_JOKE, filters);
}