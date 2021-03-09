import { gql, useQuery } from '@apollo/client';

const GET_CATEGORIES = gql`
    query GetCategories {
        categories
    }
`


export const useGetCategories = (): string[] | undefined => {
    const { loading, error, data } = useQuery(GET_CATEGORIES);

    return data?.categories;
}


// export const useGetCategories = () => useQuery(GET_CATEGORIES);