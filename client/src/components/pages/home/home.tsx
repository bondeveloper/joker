import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { NetworkStatus } from '@apollo/client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Figure from 'react-bootstrap/Figure';

import CategoriesList from './category/list';

import { getJoke } from '../../../store/actions/jokes';
import { Joke } from '../../../store/types/joke';
import { AppState } from '../../../store/store';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../../store/types/actions';

import { getCategoryList } from '../../../store/actions/categories';
import { useGetCategoryList } from '../../../store/hooks/categories/useGetCategories';
import { useGetJoke } from '../../../store/hooks/jokes/useGetJoke';


import './home.css';

interface HomePageProps {}


type Props = HomePageProps & LinkStateProps & LinkDispatchProps;

const Home: React.FC<Props> = ( { 
    selectedCategory,
    }) => {


    const categories = useGetCategoryList();

    const [ ct, setCt ] = useState( selectedCategory ); 

    const { loading, error, data, refetch, networkStatus } = useGetJoke(ct);

    let spinner, joke = null;

    if ( ( networkStatus === NetworkStatus.refetch ) || loading || error ) {
        spinner = ( ( networkStatus === NetworkStatus.refetch ) || loading )
                    ? <Spinner animation='grow' variant='info' /> 
                    : null;
    } else {
        joke = data?.joke;
    }

    const selectedCategoryHandler = ( dataFromChild: string )  => {
        setCt( dataFromChild );
    }

    const display = joke ? (
        <div>
            <Jumbotron>
                <div>
                    <Button variant='link' href={ joke ?. url } target='_blank'>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt='Joke Image'
                                src={ joke ?. icon_url }
                            />
                        </Figure>
                    </Button>
                </div>
                <p>
                { joke ?.value }
                </p>
            </Jumbotron>
            <Button variant='info' onClick={() => refetch()}> refetch! </Button>
        </div>
    ): spinner;


    return (
        <Container className='home'>
            <Row className='justify-content-md-center'>
                <Col lg={3}>
                    <CategoriesList 
                        categories={categories} 
                        category={selectedCategory} 
                        selectedCategoryHandler={selectedCategoryHandler}
                    />
                </Col>
                <Col lg={6} className='display-joke'>                         
                    { display }
                </Col>
            </Row> 
        </Container>
    )
};

interface LinkStateProps {
    selectedCategory: string,
    joke: Joke
}
interface LinkDispatchProps {
    startGetJoke: ( selected: string ) => void;
    startGetCategoryList: () => void;
}

const mapStateToProps = ( state: AppState, ownProps: HomePageProps ): LinkStateProps => {
    console.log(state);
    return {
        selectedCategory: state.category.selected,
        joke: state.joke
    }
};

const mapDispatchToProps = (
    dispatch: ThunkDispatch<any, any, AppActions>,
    ownProps: HomePageProps 
    ): LinkDispatchProps => ({
        startGetJoke: bindActionCreators( getJoke, dispatch ),
        startGetCategoryList: bindActionCreators( getCategoryList, dispatch )
    });


export default connect(mapStateToProps, mapDispatchToProps)( Home );