import React, { Component } from 'react'
import { Card, Col, CardTitle   } from 'reactstrap'
import Drawers from './Drawer';
import { Row, Col as Col1 } from 'antd';

export class Cardwork extends Component {
NombreTrabajo="Programado fullstack";
NombreEmpresa="Unicornio";
PerfilRequerido="Programar en php, saber laravel";
NivelExperticia="Junior";
Ubicacion="Ixmiquilpan";
Horarios="2:34-10:20";
Benefícios="Desayunos gratis y viernes de alegria(sale uno hora antes)";
AmbienteLaboral="Al trabajar con nosotros podras aprender nuevos retos";
TipoContrato="Indifinido";
RemuneracionAproximada="$1500";
CorreoElectrónico="contacto@vianse.com";
Imagen="http://unicorniogt.com/wp-content/uploads/2017/03/logotipo_unicornio.fw_.png";
Hace="1 dia";

constructor(props){
    super(props);
    
    this.state = {
        NombreTrabajo: "",
        NombreEmpresa: "",
        PerfilRequerido:"",
        NivelExperticia:"",
        Ubicacion:"",
        Horarios:"",
        Benefícios:"",
        AmbienteLaboral:"",
        TipoContrato:"",
        RemuneracionAproximada:"",
        CorreoElectrónico:"",
        Imagen:"",
        Hace:""
    };   
} 

    render() {
        return (
            <Col span="8">
            <div className="" style={{ paddingTop:"3%" }}>

            <Card>
            <CardTitle><h1 ><n>{this.NombreTrabajo}</n></h1><hr/></CardTitle>
            <center>
                <Row>
                <Col sm={{ size: 'auto'}}>
                    <div style={{ paddingLeft:"25%", paddingRight: "25%", }}>
                        <b >Hace:</b>{this.Hace}<br/>
                        <img  src={this.Imagen}  alt="160" width="250" />
                    </div>
                </Col>
                <Col sm={{ size: 'auto'}}>
                <div style={{ paddingLeft:"15%", paddingRight: "15%", }}>
                    <div style={{ 'text-align': 'left' }}>
                    <br/>
                        <b>Nombre de la empresa:</b> {this.NombreEmpresa} <br/>
                        <b>Ubicacion:</b> {this.Ubicacion}<br/>
                        <b>Renumeración Aproximada:</b>{this.RemuneracionAproximada}<br/>
                        
                    </div>
                    
                    </div>
                </Col>
                
                </Row>
                <div style={{ 'text-align': 'right', paddingRight: "2%",}}>
                <Drawers NombreTrabajo={this.NombreTrabajo}
                NombreEmpresa={this.NombreEmpresa}
                PerfilRequerido={this.PerfilRequerido}
                NivelExperticia={this.NivelExperticia}
                Ubicacion={this.Ubicacion}
                Horarios={this.Horarios}
                Imagen={this.Imagen}
                Benefícios={this.Benefícios}
                AmbienteLaboral={this.AmbienteLaboral}
                TipoContrato={this.TipoContrato}
                RemuneracionAproximada={this.RemuneracionAproximada}
                CorreoElectrónico={this.CorreoElectrónico}
                />
                
                    </div>
            </center>
            <br/>    
            </Card>
            
            </div>
            </Col>
        )
        
    }
}

export default Cardwork
