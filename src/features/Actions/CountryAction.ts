import {Dispatch} from 'redux'
import axios from 'axios'

import {FETCH_COUNTRIES_SUCCESS, CountryAction, FETCH_COUNTRIES_FAILURE, FETCH_COUNTRIES_LOADING} from '../types'

//fetch all countries
export function fetchAllCountriesLoading():CountryAction{

    return {
        type:FETCH_COUNTRIES_LOADING
    }

}

// fetch all countries success
export function fetchAllCountriesSuccess(countries:[]):CountryAction{
    return {
        type:FETCH_COUNTRIES_SUCCESS,
        payload:countries
    }

}

// fetch all countries failure
export function fetchAllCountriesFailure(error:string):CountryAction{
    return {
        type:FETCH_COUNTRIES_FAILURE,
        payload:error
        
    }
}

// fetch countries data

export function fetchAllCountries(){

    return (dispatch:Dispatch)=>{

       

        dispatch(fetchAllCountriesLoading())
        //axios call
        axios
        .get("https://restcountries.com/v2/all/")
        .then((res)=>{
            const countries=res.data 
            dispatch(fetchAllCountriesSuccess(countries))
        }).catch((err)=>{
            dispatch(fetchAllCountriesFailure(err))

        })
    }

    
}