import React, { Component } from 'react'
import { Card } from 'zent';


export class Cardwork extends Component {

    render() {
        return (
        <Card style={{ width: 400 }} title="Card Title">
            <p>Card item</p>
            <p>Card item</p>
        </Card>        )
    }
}

export default Cardwork
