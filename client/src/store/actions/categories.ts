import { Dispatch } from 'redux';

import { AppActions } from '../types/actions';
import { AppState } from '../store';
import { useGetCategoryList } from '../hooks/categories/useGetCategories';
import { SET_CATEGORY_LIST } from '../types/actions';


export const setCategoryList = ( list: string[] ): AppActions => ({
    type: SET_CATEGORY_LIST,
    list
});

export const getCategoryList = () => {
    return ( dispatch: Dispatch<AppActions>, getState: () => AppState ) => {
        const categories = useGetCategoryList();

        dispatch( setCategoryList( categories ) );
    }
}