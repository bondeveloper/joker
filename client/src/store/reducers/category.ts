import { CategoryActionTypes } from '../types/actions';
import { SET_CATEGORY_LIST } from '../types/actions';
import { gql, useQuery } from '@apollo/client';
import { useGetCategoryList } from '../hooks/categories/useGetCategories';


const initState = {
    selected: ''
};


const reducer = ( state = initState, action: CategoryActionTypes ) : typeof initState => {
    switch ( action.type ) {
        default:
            return state;
    };
};

export default reducer;