import React from 'react'
import {useDispatch} from 'react-redux'
import ListCountries from '../../components/Table/table'

const Home=()=>{
    const [countries,setCopuntries] = React.useState([])
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
                <ListCountries countries={countries} />            </div>

        </div>
    )
}
export default Home

function FetchAllCountriesAction(): any {
    throw new Error('Function not implemented.')
}

