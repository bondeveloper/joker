import React from 'react';


interface CategoryListProps {
    categories: string[]
}

const CategoriesList: React.FC< CategoryListProps > = ( { categories }: CategoryListProps ) => {
    return (
        <div>
            { categories.map( cat => (
                <option key={cat}> {cat}</option>
            ))}
        </div>
    )
};

export default CategoriesList;