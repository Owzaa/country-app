import React from 'react'
import {useDispatch} from 'react-redux'
import ListCountries from '../../components/Table/table'

const Home=()=>{
    const [countries,setCountries] = React.useState([])
    //Initializing our Dispacth()
    const Dispatch = useDispatch() 

//dispatch our  fetchAllCountry Data
usefetch(() => {
    Dispatch("https://restcountries.com/v2/all/")
    return setCountries;
  
},[Dispatch])

    return(
        <div>
            <div className='searchBar-container'>


            </div>
            
            <div className='countryList-container'>
                <ListCountries {...countries.entries} />            </div>

        </div>
    )
}
export default Home;

function usefetch(arg0: () => React.Dispatch<React.SetStateAction<never[]>>, arg1: import("redux").Dispatch<any>[]) {
    throw new Error('Function not implemented.')
}

