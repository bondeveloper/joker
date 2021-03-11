export const SET_CATEGORY_SELECTED = 'SET_CATEGORY_SELECTED';


export interface SetCategorySelectedAction {
    type: typeof SET_CATEGORY_SELECTED,
    selected: string
}

export type CategoryActionTypes = SetCategorySelectedAction;
export type AppActions =  CategoryActionTypes;