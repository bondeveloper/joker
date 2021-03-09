import React, { useState } from 'react';


interface CategoryListProps {
    categories: string[]
}


const CategoriesList: React.FC< CategoryListProps > = ( { categories }: CategoryListProps ) => {
    const [ category, setCategory ] = useState('');

    const onChangedHandler = ( e: React.ChangeEvent<HTMLSelectElement> ): void => setCategory(e.currentTarget.value);
    
    return (
        <div>
            <select onChange={onChangedHandler}>
                <option value=''>select category</option>
                { categories.map( cat => (
                    <option key={cat} value={cat}> {cat}</option>
                ))}
            </select>
        </div>
    )
};

export default CategoriesList;