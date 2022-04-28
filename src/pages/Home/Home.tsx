import React from 'react'
/* import {useDispatch} from 'react-redux'
 */import ListCountries from '../../components/Table/table'

const Home=()=>{
/*     const [countries,setCountries] = React.useState([])
 */    //Initializing our Dispacth()
/*     const Dispatch = useDispatch() 
 */
//dispatch our  fetchAllCountry Data
/* useFetch(() => {
    Dispatch("https://restcountries.com/v2/all/")
    return setCountries;
  
},[Dispatch]) */

    return(
        <div>
            <div className='searchBar-container'>


            </div>
            
            <div className='countryList-container'>
                <ListCountries  />            </div>

        </div>
    )
}
export default Home;


