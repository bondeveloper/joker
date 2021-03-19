import { CategoryActionTypes, SET_CATEGORY_SELECTED, CategoryStateTypes } from '../types/actions';


const initState = {
    selected: ''
};


const reducer = ( state: CategoryStateTypes, action: CategoryActionTypes ) : typeof initState => {
    switch ( action.type ) {
        case SET_CATEGORY_SELECTED:
            return {
                selected: action.selected
            }
        default:
            return initState;
    };
};

export default reducer;