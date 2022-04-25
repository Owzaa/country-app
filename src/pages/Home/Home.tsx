import React from 'react'
import ListCountries from '../../components/Table/table'

const Home=()=>{
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