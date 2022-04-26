import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {AppState} from '../../features/types'
import { fetchAllCountries} from '../../features/Actions'
import { css } from '@emotion/css'
import Country from '../../pages/Country/Country'


// dataProps
type CountryListProps={
        name: string
        alpha3Code: string
        capital: string
        region: string
        callingCodes: string
        timezones:string
        flag:string 
        country: object
       

}


const  ListCountries = ({CountryListProps}) => {

  // GET: allCountries from Redux State
  const countries = useSelector((state: AppState) => state.countryReducer.countries)
  const isLoading = useSelector((state: AppState) => state.countryReducer.isLoading)
  // initializing Dispatch
  const dispatch = useDispatch()

  // Disptched CountriesData when page Loads
  React.useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])





  return (
    <>
      <h1 className={css`
      justify-content:center;
      text-transform:uppercase;
      color: Silver;
      opacity: .9;
      font-weight: 900;
      font-size:65px;
      `}> Worldwide Countries <strong>🌐</strong></h1>
      <table className={css`
                    color: black;
                    font-size: 18px;
                    display:center;
                    justify-content: center;
                    text-align: center;
                  
                    
                    `}>
        <thead className={css`
                    color: DarkTurquoise;
                    font-size: 30px;
                    display:flexbox;
                    justify-content:center;
                    text-transform: uppercase;
                    border-width:1px;
                    border-color:white;          
                     border-radius: 15px;
                    `}>
          <tr className={css`
          justify-content:center;
                border-width: 1px;
                border-color: white;
               
          
          `}>
            <th>Name </th>
            <th> Alpha3Code </th>
            <th> Capital </th>
            <th> Region </th>
            <th> Call_Code </th>
            <th> Timezones </th>
            <th> Flag </th>
            <th> Actions </th>
          </tr>
        </thead>
        {isLoading && <h2>Loading...</h2>}
        <tbody className={css`
    color: Snow;
    font-size: 15px;
    display:flexbox;
    justify-content:center;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 35px;
    `}>

          <tr>

           

          </tr>
        </tbody>
      </table>

    </>
  )
}

export default ListCountries;