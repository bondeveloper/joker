import { Dispatch } from 'redux';

import { AppActions } from '../types/actions';
import { AppState } from '../store';
import { useGetCategoryList } from '../hooks/categories/useGetCategories';
import { SET_CATEGORY_LIST } from '../types/actions';

import { gql, useQuery } from '@apollo/client';


export const setCategoryList = ( list: string[] ): AppActions => ({
    type: SET_CATEGORY_LIST,
    list
})

// const GET_CATEGORIES = gql`
//     query GetCategories {
//         categories
//     }
// `

// const useGetCategoryList = (): string[] => {
//     const { loading, error, data } = useQuery(GET_CATEGORIES);

//     return data?.categories;
// }

export const getCategoryList = () => {
    return ( dispatch: Dispatch<AppActions>, getState: () => AppState ) => {
        const categories = useGetCategoryList();

        dispatch( setCategoryList( categories ) );
    }
}