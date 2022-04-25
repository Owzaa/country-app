import {Dispatch} from "redux"
 import { FETCH_COUNTRIES_LOADING,FETCH_COUNTRIES_SUCCESS,FETCH_COUNTRIES_FAILURE, CountryAction} from "../types"



 // fetching all countries
export function FetchAllCountriesLoadingAction():any{

        return{
            type: FETCH_COUNTRIES_LOADING
        }
} 

// COUNTRIES Success
export function fetchAllCountriesSuccess(countries:[]):CountryAction{

    return{
        type:FETCH_COUNTRIES_SUCCESS,
        payload:countries
    }
}

// COUNTRIES Failure
export function fetchAllCountriesFailure(error:string):CountryAction{

    return{
        type:FETCH_COUNTRIES_FAILURE,
        payload:error
    }
}

// Fetching All countries daTA

export function fetchAllLooadingCountries(){
        return(dispatch:Dispatch)=>{
            dispatch(FetchAllCountriesLoadingAction())
            .get('https://restcountries.eu/rest/v2/al')
            .then((res: { data: any })=>{
                const countries= res.data 
                dispatch(fetchAllCountriesSuccess(countries))
            }).catch((err: string)=>{
                dispatch(fetchAllCountriesFailure(err))
            })
        }
}
 