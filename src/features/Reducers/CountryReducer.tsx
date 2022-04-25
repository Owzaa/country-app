import { CountryReducerState, FETCH_COUNTRIES_LOADING,FETCH_COUNTRIES_SUCCESS,FETCH_COUNTRIES_FAILURE} from "../types"

// initials state
const initiState:CountryReducerState={
    countries:[],
    isLoading:false,
    error:''
}

export default function CountryReducer(state=initiState,action:any){

    switch(action.type){

// API fetch country data[] isLoading === true
case FETCH_COUNTRIES_LOADING:
    return{
    ...state,
    isLoading:true
}

// If fetching is Succesfull
case FETCH_COUNTRIES_SUCCESS:
    return{
    ...state,
    isLoading:false,
        countries:action.payload,
        error:'',
    }

// if fetching has ERRORS
case FETCH_COUNTRIES_FAILURE:
    return{
        ...state,
        isLoading:false,
        error:action.payload 
    }
        default:
            return state
    
    }
}