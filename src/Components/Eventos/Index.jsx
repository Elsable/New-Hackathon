import React, { Component } from 'react'
import { SearchInput, Notify } from 'zent';
import {  Row, Col } from 'reactstrap';

export class Eventos extends Component {
    constructor() {
            super();
            this.state = {
                date1: null,
                
        }
        this.dateTemplate = this.dateTemplate.bind(this);
    }

    dateTemplate(date) {
        if (date.day > 10 && date.day < 15) {
            return (
                <div style={{backgroundColor: '#1dcbb3', color: '#ffffff', fontWeight: 'bold', borderRadius: '50%', width: '2em', height: '2em', lineHeight: '2em', padding: 0}}>{date.day}</div>
            );
        }
        else {
            return date.day;
        }
    }

    render() {
        const es = {
            firstDayOfWeek: 1,
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
        };

        return (
          <div className="container">
          <br/>
          <Row>
            <br/>
            <Col xs="6">Qué
             <SearchInput
                        // value={this.state.value}
                        // onChange={this.onChange}
                        // placeholder="Search"
                        // onPressEnter={this.onPressEnter}
                    />
                    <small className="form-text text-muted">Escriba Titulo del evento</small>
            </Col>
            <Col xs="6">Filtrar por:
            {/* <Calendar value={this.state.date2} onChange={(e) => this.setState({date2: e.value})} locale={es} dateFormat="dd/mm/yy" /> */}
            </Col>
            </Row>
        </div>
        )
    }
}

export default Eventos
