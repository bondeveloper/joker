import { gql, useQuery } from '@apollo/client';

const GET_CATEGORIES = gql`
    query GetCategories {
        categories
    }
`

export const useGetCategoryList = (): string[] => {
    const { data } = useQuery(GET_CATEGORIES);

    return data?.categories;
}