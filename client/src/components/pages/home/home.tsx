import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CategoriesList from './category/list';
import Joke from './joke/view';

import './home.css';

interface HomePageProps {}


type Props = HomePageProps;

const Home: React.FC<Props> = () => {

    const [ category, setCategory ] = useState("");

    const selectedCategoryHandler = ( dataFromChild: string )  => {
       setCategory( dataFromChild );
    }

    return (
        <Container className='home'>
            <Row className='justify-content-md-center'>
                <Col lg={3}>
                    <CategoriesList
                        selectedCategoryHandler={ selectedCategoryHandler }
                    />
                </Col>
                <Col lg={6} className='display-joke'>
                    <Joke category={category}/>                    
                </Col>
            </Row> 
        </Container>
    )
};

export default Home;