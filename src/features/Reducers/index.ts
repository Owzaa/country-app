import { combineReducers } from "redux";
import CountryReducer from "./CountryReducer";


const rootRedducer=()=>{

combineReducers({
    CountryReducer,
    
})

}

export default rootRedducer