const FETCH_USER_DISCS = 'USERDISC/FETCH_USER_DISCS';

/*
* ACTIONS
*/

//
// Fetches user discs
export const fetchUserDiscs = ()=> dispatch =>{
    console.log('Fetching user discs in redux action')
    fetch('http://localhost:8080/api/get/discs/user')
    .then(res => res.json())
    .then(userDiscs => dispatch({
        type: FETCH_USER_DISCS,
        payload: userDiscs
    }));
};


/*
* REDUCERS
*/

const initialState = {
    discs: [],
}

export default function(state = initialState, action){
    switch(action.type){

        case FETCH_USER_DISCS:
        console.log('Fetching user discs redux action: ',action.payload)
        return{
            ...state,
            discs: action.payload
        };

        default:
        return state;
    }
}