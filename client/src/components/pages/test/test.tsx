import React from 'react';

import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './test.css';
import logo from '../../../shared/assets/images/logo.png';

const Test: React.FC = () => {
    return (
        <Container className='test'>
            <Alert variant='danger'>
                Hi! This is a dummy page that was created to test routing
            </Alert>
            <Image
                src={ logo }
                width='80'
                // height='30'
                className='d-inline-block aligh-top'
                alt='Joker logo'
                roundedCircle
            />
        </Container>
    )
};

export default Test;