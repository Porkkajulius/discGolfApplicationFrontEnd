const FETCH_USER_DISCS = 'USERDISC/FETCH_USER_DISCS';

/*
* ACTIONS
*/

//
// Fetches user discs
export const fetchUserDiscs = ()=> dispatch =>{
    
}


/*
* REDUCERS
*/

const initialState = {
    userDiscs: [],
}

export default function(state = initialState, action){
    switch(action.type){

        case FETCH_USER_DISCS:
        console.log('Fetching user discs')
        return{
            ...state,
            userDiscs: action.payload
        };

        default:
        return state;
    }
}