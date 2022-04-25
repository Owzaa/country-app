import React from 'react';
import {Switch} from 'react-router'
import {Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Country from './pages/Country/Country'


const Routes = () => (

    <Switch>

<Route  path="/" element={Home} />
<Route path="/Country/:name" element={Country} />


    </Switch>
)
export default Routes