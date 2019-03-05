import React, { Component } from 'react'
import { SearchInput, Notify } from 'zent';
import Cardwork from './cardwork';
import {  Row, Col } from 'reactstrap';

import {Button, Icon,Input} from 'zent'


export class Work extends Component {
    constructor () {
        super();
        this.state = {
            value: '',
            value2:''
        };
        this.onChange = this.onChange.bind(this);
        this.onChange2 = this.onChange2.bind(this);   
    }
    onChange = evt => {
        this.setState({
        value: evt.target.value
        });
    };
    onChange2 = evt => {
        this.setState({
        value2: evt.target.value
        });
    };
    onPressEnter = () => {
        const { value, value2 } = this.state;
        
        if (value) {
            if(value2){
                Notify.success(`Your enter content: ${value}, ${value2}`);
            }else{
                Notify.success(`Your enter content: ${value}`);
            }
            
        } 
        if(value.length <1 && value2){
            Notify.success(`Your enter content: ${value2}`);
        }
        if(value.length <1 && value2.length<1  ) {
        Notify.error('Please input search content');
        }
    }
    
    render() {
        // const { value } = this.state;
        return (
            <div className="container">
            <br/>
      
            <Row>
                <Col xs="auto" >
                    <br/>
                </Col>
                <Col xs="5">Qué
                    <SearchInput
                        value={this.state.value}
                        onChange={this.onChange}
                        placeholder="Search"
                        onPressEnter={this.onPressEnter}
                    />
                    <small className="form-text text-muted">Escriba Titulo, Renumeración, Empresa</small>
                </Col>
                <Col xs="5"> Donde
                    <Input onChange={this.onChange2} value={this.state.value2} onPressEnter={this.onPressEnter} showClear />
                    <small className="form-text text-muted">Ciudad, Estado</small>
                </Col>
                <Col xs="auto" >
                    <br/><center>
                    <Button onClick={this.onPressEnter} type="primary"><Icon type="search" />Buscar</Button>   
                    </center>
                </Col>
            </Row>
            <hr/>
            <br/>
            <div className="container">
                <div className="row">
                <Cardwork/><Cardwork/><Cardwork/><Cardwork/><Cardwork/>
                </div>
            </div>
        </div>
        )
    }
}

export default Work
