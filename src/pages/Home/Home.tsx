import React from 'react'
import {useDispatch} from 'react-redux'

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
                <ListCountries />
            </div>

        </div>
    )
}
export default Home

function FetchAllCountriesAction(): any {
    throw new Error('Function not implemented.')
}

