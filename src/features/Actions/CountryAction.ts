import { FETCH_COUNTRIES,FETCH_COUNTRIES_SUCCESS,FETCH_COUNTRIES_FAILURE,FetchAllCountriesAction} from "../types"



// fetching all countries
export function fetchAllCountries():any{

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
export function fetchAllCountriesFailure(error:string):any{

    return{
        type:FETCH_COUNTRIES_FAILURE,
        payload:error
    }
}

// Fetching All countries daTA

export  default function fetchAllCountries(){
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
