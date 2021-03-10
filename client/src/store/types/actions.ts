import { Joke } from './joke';

export const GET_JOKE_SUCCESS = 'GET_JOKE_SUCCESS';
export const SET_CATEGORY_LIST = 'SET_CATEGORY_LIST';


export interface GetJokeAction {
    type: typeof GET_JOKE_SUCCESS;
    joke: Joke
}

export interface SetCategoryListAction {
    type: typeof SET_CATEGORY_LIST,
    list: string[]
}

export type JokeActionTypes = GetJokeAction
export type CategoryActionTypes = SetCategoryListAction
export type AppActions = JokeActionTypes | CategoryActionTypes