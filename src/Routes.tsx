import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Country from './pages/Country/Country'


const  Routers= () => (

    <Routes>

<Route  path="/" element={<Home/>} />
<Route path="/Country/:name" element={<Country/>} />


    </Routes>
)
export default Routers