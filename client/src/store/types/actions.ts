export const SET_CATEGORY_SELECTED = 'SET_CATEGORY_SELECTED';


export interface SetCategorySelectedAction {
    type: typeof SET_CATEGORY_SELECTED,
    selected: string
}

export interface SetCategoryStateTypes {
    selected: string
}

export type CategoryActionTypes = SetCategorySelectedAction;
export type CategoryStateTypes = SetCategoryStateTypes;
export type AppActions =  CategoryActionTypes;