//
const initState={
    countries:[],
    isLoading:false,
    error:''
}

export default function countryReducer(state=initState,action:any){

    switch(action.type){

// API fetch country data[] isLoading === true
case'FETCH_COUNTRIES':
    return{
        ...state,
        isLoading:true
}

// If fetching is Succesfull
case 'FETCG_COUNTRIES_SUCCESS':
    return{
        ...state,
        isLoading:false,
        countries:action.payload,
        error:'',
    }
// if fetching has ERRORS
case 'FETCH_COUNTRIES_FAILURE':
    return{
        ...state,
        isLoading:false,
        error:action.payload 
    }
        default:
            return state
    
    }
}