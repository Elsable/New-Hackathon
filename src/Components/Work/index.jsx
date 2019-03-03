import React, { Component } from 'react'
import { SearchInput, Notify } from 'zent';
import Cardwork from './cardwork';
import { Container, Row, Col } from 'reactstrap';

import {Button, Icon,Input} from 'zent'


export class Work extends Component {
    state = {
        value: ''
    };
    
    onChange = evt => {
        this.setState({
        value: evt.target.value
        });
    };
    
    onPressEnter = () => {
        const { value } = this.state;
    
        if (value) {
        Notify.success(`Your enter content: ${value}`);
        } else {
        Notify.error('Please input search content');
        }
    }
    
    render() {
        const { value } = this.state;
        return (
            <div className="container">
            <br/>

            <Row>
                <Col xs="auto" >
                    <br/>
                </Col>
                <Col xs="5">Qué
                    <SearchInput
                        value={value}
                        onChange={this.onChange}
                        placeholder="Search"
                        onPressEnter={this.onPressEnter}
                    />
                    <small className="form-text text-muted">Escriba Titulo, Renumeración, Empresa</small>
                </Col>
                <Col xs="5"> Donde
                    <Input onChange={this.onChange} value={this.state.value} showClear />
                    <small className="form-text text-muted">Ciudad, Estado</small>
                </Col>
                <Col xs="auto" >
                    <br/><center>
                    <Button onClick={this.onPressEnter} type="primary"><Icon type="search" />Buscar</Button>   
                    </center>
                </Col>
            </Row>
            <br/>
            <Cardwork/>
        </div>
        )
    }
}

export default Work
