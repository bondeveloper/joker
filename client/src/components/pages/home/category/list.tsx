import React, { useReducer } from 'react';
import reducer from '../../../../store/reducers/category';

import './list.css';

import { useGetCategoryList } from '../../../../store/hooks/categories/useGetCategories';
import { SET_CATEGORY_SELECTED } from '../../../../store/types/actions';

interface CategoryListPageProps {
    selectedCategoryHandler: (arg: string) => void
}

const CategoriesList: React.FC< CategoryListPageProps > = ( { 
    selectedCategoryHandler 
}: CategoryListPageProps ) => {

    /* 
    * Here there best way is use useState. I used useReducer to get a feel of the hook.
    * Actually there is no need for any hook on this page since the selected value if only used on the parent
    * component. Since this was a learning app, I decided to do this to understand hooks and typescript  better.
    */
    // const [ state, dispatch ] = useReducer<typeof reducer>( reducer, { selected: ""} );


    const onChangedHandler = ( e: React.ChangeEvent<HTMLSelectElement> ): void => {
        // dispatch({ type: SET_CATEGORY_SELECTED, selected: e.currentTarget.value});
        selectedCategoryHandler( e.currentTarget.value );
    }

    const categories = useGetCategoryList();
    
    return (
        <div className='list'>
            <label>Category</label>
            <select onChange={(onChangedHandler)}>
                <option key='random' value=''> random </option>
                
                { categories ? categories.map( ( cat: string ) => (
                    <option key={cat} value={cat}> {cat}</option>
                )) : null }
                
            </select>
        </div>
    )
};

export default CategoriesList;