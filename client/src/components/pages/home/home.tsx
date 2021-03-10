import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { StringLiteralLike } from 'typescript';


import { getCategoryList } from '../../../store/actions/categories';
import { useGetJoke } from '../../../store/hooks/jokes/useGetJoke';
import CategoriesList from './categories-list/categories-list';


import { getJoke } from '../../../store/actions/jokes';
import { Joke } from '../../../store/types/joke';
import { AppState } from '../../../store/store';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../../store/types/actions';
import { useGetCategoryList } from '../../../store/hooks/categories/useGetCategories';



interface HomePageProps {
    category?: string,
    list?: string[]
}

interface HomePageState {}

type Props = HomePageProps & LinkStateProps & LinkDispatchProps;

export class Home extends React.Component<Props, HomePageState> {

    componentDidMount() {
        //const categories = useGetCategoryList();
        this.props.startGetCategoryList();
    }

    render() {
        this.props.startGetCategoryList();
        console.log(this.props);
        return <h1> Home</h1>
    }
}

interface LinkStateProps {
    list: string[]
}
interface LinkDispatchProps {
    startGetJoke: ( category: string ) => void;
    startGetCategoryList: () => void;
}

const mapStateToProps = ( state: AppState, ownProps: HomePageProps ): LinkStateProps => {
    console.log(state);
    return {
        list: state.categories
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