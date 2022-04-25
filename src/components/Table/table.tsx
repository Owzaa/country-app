import { css } from '@emotion/css'

// dataProps
type CountryListProps={
        name: string
        alphaCode: string
        capital: string
        region: string
        callingCode: string
        timezone:string
        flag:string 
       

}


const  ListCountries =({name,alphaCode,capital,callingCode,region,timezone,flag}:CountryListProps)=> {
  return (
    < >
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
                  
                    
                    `} >   
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
          <th  >Name </th> 
          <th > Alpha3Code </th>
          <th > Capital </th>
          <th > Region </th>
          <th > Call_Code </th>
          <th > Timezones </th>
          <th > Flag </th>
          <th > Actions </th> 
           </tr> 
    </thead>

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
    <td>{name}</td>
    <td>{alphaCode}</td>
    <td>{capital}</td>
    <td>{region}</td>
    <td>{callingCode}</td>
    <td>{timezone}</td>
    <td><img src={flag} alt="country-flag" /></td>

    
    </tr>
    
    </tbody>
    </table>
    
    </>
  );
}

export default ListCountries;