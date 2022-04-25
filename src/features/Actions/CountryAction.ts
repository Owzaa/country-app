import { FETCH_COUNTRIES,FETCH_COUNTRIES_SUCCESS,FETCH_COUNTRIES_FAILURE,FetchAllCountriesAction} from "../types"


// fetching all countries
export function fetchAllCountries():FetchAllCountriesAction{

    return{
        type:FETCH_COUNTRIES
    }
}

// COUNTRIES Success
export function fetchAllCountriesSuccess(countries:[]):any{

    return{
        type:FETCH_COUNTRIES_SUCCESS,
        payload:countries
    }
}

// COUNTRIES Failure
export function fetchAllCountriesFailure(countries:[]):any{

    return{
        type:FETCH_COUNTRIES_FAILURE,
        payload:countries
    }
}