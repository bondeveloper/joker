import React, { useState } from 'react';


interface CategoryListPageProps {
    categories: string[],
    category: string,
    selectedCategoryHandler: (arg: string) => void
}
const CategoriesList: React.FC< CategoryListPageProps > = ( { 
    categories, category, selectedCategoryHandler 
}: CategoryListPageProps ) => {

    const onChangedHandler = ( e: React.ChangeEvent<HTMLSelectElement> ): void => {
        selectedCategoryHandler(e.currentTarget.value);
    }
    
    return (
        <div>
            <select onChange={onChangedHandler}>
                <option value={ category }>{ category ? category : 'select category' }</option>
                { categories.map( ( cat: string ) => (
                    <option key={cat} value={cat}> {cat}</option>
                ))}
            </select>
        </div>
    )
};

export default CategoriesList;