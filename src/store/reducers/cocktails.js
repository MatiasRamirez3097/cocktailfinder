import { FETCHING_DATA_REJECTED, FETCHING_DATA_SUCCESS, FETCHING_DATA } from "../constants";

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
    error: false,
}


const cocktailsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_DATA: 
            return {
                ...state,
                data: [], 
                loading: true
            };
        case FETCHING_DATA_SUCCESS:
            return {
                ...state, 
                data: action.data, 
                loading: false,
            }
        case FETCHING_DATA_REJECTED:
            return {
                ...state, 
                loading: false,
                error: true
            };
        default: 
            return state;
    }
}

export default cocktailsReducer;