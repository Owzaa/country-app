import { FETCH_COUNTRIES,FETCH_COUNTRIES_SUCCESS,FETCH_COUNTRIES_FAILURE,FetchAllCountriesAction} from "../types"


// Fetching All countries daTA

export function fetchAllCountries(){
        return(dispatch:Dispatch)=>{
            dispatch(fetchAllCountriesLoading())
            axios.get('https://restcountries.eu/rest/v2/al')
            .then((res)=>{
                const countries= res.data 
                dispatch(fetchAllCountriesSuccess(countries))
            }).catch((err)=>{
                dispatch(fetchAllCountriesFailure(err))
            })
        }


}
// fetching all countries
export function fetchAllCountriesLoading():CountryAction{

    return{
        type:FETCH_COUNTRIES_LOADING
    }
}

// COUNTRIES Success
export function fetchAllCountriesSuccess(countries:[]):CountryActions{

    return{
        type:FETCH_COUNTRIES_SUCCESS,
        payload:countries
    }
}

// COUNTRIES Failure
export function fetchAllCountriesFailure(error:string):CountryActions{

    return{
        type:FETCH_COUNTRIES_FAILURE,
        payload:error
    }
}
