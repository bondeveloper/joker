import { Joke } from './joke';

export const SET_JOKE = 'SET_JOKE';
export const SET_CATEGORY_LIST = 'SET_CATEGORY_LIST';
export const SET_CATEGORY_SELECTED = 'SET_CATEGORY_SELECTED';


export interface SetJokeAction {
    type: typeof SET_JOKE;
    joke: Joke
}

export interface SetCategoryListAction {
    type: typeof SET_CATEGORY_LIST,
    list: string[]
}

export interface SetCategorySelectedAction {
    type: typeof SET_CATEGORY_SELECTED,
    selected: string
}

export type JokeActionTypes = SetJokeAction
export type CategoryActionTypes = SetCategoryListAction | SetCategorySelectedAction
export type AppActions = JokeActionTypes | CategoryActionTypes