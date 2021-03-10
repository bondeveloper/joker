import { CategoryActionTypes } from '../types/actions';


const initState = {
    selected: ''
};


const reducer = ( state = initState, action: CategoryActionTypes ) : typeof initState => {
    switch ( action.type ) {
        default:
            return state;
    };
};

export default reducer;