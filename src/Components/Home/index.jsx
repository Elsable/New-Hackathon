import React, {Fragment} from 'react'
import { Carrusel } from './Carrusel';
import {MenuP} from './Menu'
export const Home=()=>(
    <Fragment>
        <MenuP/>
        <Carrusel/>
        <div>Inicio</div>
    </Fragment>
)