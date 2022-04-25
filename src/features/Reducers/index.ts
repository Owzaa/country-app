import { combineReducers } from "redux";
import CountryReducer from "./CountryReducer";

// initialize Test State
const initState={
    testName:''
}

const rootRedducer=()=>{

combineReducers({
    CountryReducer,
    
})

}

export default rootRedducer