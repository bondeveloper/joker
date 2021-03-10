import React, { useState } from 'react';

import './list.css';

interface CategoryListPageProps {
    categories: string[],
    category: string,
    selectedCategoryHandler: (arg: string) => void
}

const CategoriesList: React.FC< CategoryListPageProps > = ( { 
    categories,
    category,
    selectedCategoryHandler 
}: CategoryListPageProps ) => {

    const onChangedHandler = ( e: React.ChangeEvent<HTMLSelectElement> ): void => {
        selectedCategoryHandler(e.currentTarget.value);
    }
    
    return (
        <div className='list'>
            <label>Category</label>
            <select onChange={onChangedHandler}>
                
                { categories ? categories.map( ( cat: string ) => (
                    <option key={cat} value={cat}> {cat}</option>
                )) : <option key='random' value=''>random</option>}
                
            </select>
        </div>
    )
};

export default CategoriesList;