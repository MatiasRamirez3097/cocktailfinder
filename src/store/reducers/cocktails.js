/*const initialState = {
    cocktailsReducer: null
}

const cocktailsReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case 'CHARGE_COCKTAILS':
            const newState(action.payload)
            return newState;
        default:
            return state;
    }
}*/
const initialState = {
    //Have a people array responsible for getting the data and setting to the array.
    data: [],
    //Have the loading state indicate if it's done getting data.
    loading: false,
    //Have state for error message for recieving an error.
    errorMessage: '',
}
//Initiate the api call
const GET_DATA = 'GET_DATA';
//Gets the players on api call is fullfilled
const GET_DATA_FULFILLED = 'GET_DATA_FULFILLED';
//When there is a error return an errror action type. 
const GET_DATA_REJECTED = 'GET_DATA_REJECTED';

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA: 
        return {...state, loading: action.payload};
        case GET_DATA_FULFILLED:
        return {...state, people: action.payload, loading: action.loading};
        case GET_DATA_REJECTED:
        return {...state, errorMessage: action.payload, loading: action.loading};
        default: 
        return state;
    }
}

export default cocktailsReducer;