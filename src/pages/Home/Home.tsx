import React from 'react'
import {useDispatch} from 'react-redux'
import ListCountries from '../../components/Table/table'

const Home=()=>{
    //Initializing our Dispacth()
    const dispatch = useDispatch() 

//dispatch our  fetchAllCountry Data
React.useEffect(() => {
    dispatch(FetchAllCountriesAction())
},[dispatch])

    return(
        <div>
            <div className='searchBar-container'>


            </div>
            
            <div className='countryList-container'>
                <ListCountries {...ListCountries}countries />
            </div>

        </div>
    )
}
export default Home

