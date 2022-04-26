import React from 'react'
import {useDispatch} from 'react-redux'
import { FetchAllCountriesLoadingAction } from '../../features/Actions/CountryAction'
import ListCountries from '../../components/Table/table'
import Country from '../Country/Country'

const Home=()=>{
    //Initializing our Dispacth()
    const dispatch = useDispatch() 

//dispatch our  fetchAllCountry Data
React.useEffect(() => {
    dispatch(FetchAllCountriesLoadingAction())
},[dispatch])

    return(
        <div>
            <div className='searchBar-container'>


            </div>
            
            <div className='countryList-container'>
            </div>

        </div>
    )
}
export default Home