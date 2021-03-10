import { CategoryActionTypes } from '../types/actions';
import { SET_CATEGORY_LIST } from '../types/actions';
// const initState = {
//     selected: 'dev',
//     list: []
// };

const initState: string[] = []


const reducer = ( state = initState, action: CategoryActionTypes ) : string[] => {
    switch ( action.type ) {
        case SET_CATEGORY_LIST:
            return action.list
        default:
            return state;
    };
};

export default reducer;