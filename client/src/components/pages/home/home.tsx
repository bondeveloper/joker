import React from 'react';
import Button from 'react-bootstrap/Button';

import { useGetCategories } from '../../../hooks/categories/useGetCategories';
import CategoriesList from './categories-list/categories-list';

const Home: React.FC = () => {
    // I should remember to try and move this to the redux store to highlight redux knowledge
    const categories = useGetCategories(); 
    return (
        <div>
            <CategoriesList categories={categories || []}/>
            <Button variant='primary'>random joke</Button>
        </div>
    )
};

export default Home;