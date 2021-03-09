import React from 'react';

import CategoriesList from './categories-list/categories-list';

const Home: React.FC = () => {
    const categories: string[] = [
        'animal',
        'career',
        'celebrity',
        'dev',
        'explicit',
        'fashion',
        'food',
        'history',
        'money',
        'movie',
        'music',
        'political',
        'religion',
        'science',
        'sport',
        'travel'
    ]
    return (
        <div>
            <CategoriesList categories={categories}/>
        </div>
    )
};

export default Home;