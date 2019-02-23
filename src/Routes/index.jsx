import React,{Fragment} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Home } from '../Components/Home/index';
import Unnabvar from '../Components/Navbar/Unnabvar';


export const Routes = () => (
    <Fragment>
        <Unnabvar/>
        <Home/>
    </Fragment>
)