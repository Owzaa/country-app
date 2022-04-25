import { useState } from "react"
import { css } from '@emotion/css'


const required = "please kindly type your Country Name"


export default function SearchForm (props) {
  const [countries, setCountries] = useState('')

  const handleSubmit = event => {
      event.preventDefault()
  
       countries
        .get(searchCountry)
        .then(resp => {
          props.onSubmit(resp.data)
          setCountries('')
        })
    }


    const searchCountry = async term => {
      if(term.length < 3 || term === '') return
      const res = await fetch(`https://restcountries.eu/rest/v2/name/${term}`)
      const data = await res.json()
      // console.log(data)
       setCountries(data)
  }
    return (
      <form className={css`
      padding:0px 1px;
      padding-top: 5px 5px;
      color: white;
      margin: 0px;
    `}
    onSubmit={handleSubmit}>   
        <input className={css`
        width: 475px;
        height: 35px;
        padding-top: 5px;
        background-color: WhiteSmoke	;
        font-size:14px;
        border-radius: 15px;
        border: none;
        color:DarkGray;
        margin: 5px;  
        
      `} required = {required}
          type="text"
          onChange={term => searchCountry(term.target.value)}
          placeholder="Search By: countries_name"
      
        />
        <button className={css`
        width: 125px;
        height: 35px;
        padding-top: 1px 2px 5px 0px;
        opacity: 9;
    
       color: DarkGray;
  
        font-size:18px;
        font-weight: 800;
        border-radius: 15px;
        anchor:true;
        border: none;
        margin: 15px;
        &:hover {
          color: WhiteSmoke;
          hover:  5s;
          background-color: FireBrick;
        }
      `}  type="submit">SEARCH</button>
      </form>
    )
}