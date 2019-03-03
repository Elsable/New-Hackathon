import React, { Component } from 'react'
import { Row, Col,Card,  CardTitle   } from 'reactstrap'
import Drawers from './Drawer';

export class Cardwork extends Component {
NombreTrabajo="Programado fullstack";
NombreEmpresa="Vianse";
PerfilRequerido="Programar en php, saber laravel";
NivelExperticia="Junior";
Ubicacion="Ixmiquilpan";
Horarios="2:34-10:20";
Benefícios="Desayunos gratis y viernes de alegria(sale uno hora antes)";
AmbienteLaboral="Al trabajar con nosotros podras aprender nuevos retos";
TipoContrato="Indifinido";
RemuneracionAproximada="$1500";
CorreoElectrónico="contacto@vianse.com";
Imagen="https://static1.squarespace.com/static/57d830bde58c62769f259197/5887af33440243d06b87b7d1/5887afbc5016e1ca509084a0/1485287361047/vianse1+%281%29.png?format=2500w"

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
        Imagen:""
    };   
} 

    render() {
        return (
            <div className="col-md-12" style={{ paddingTop:"3%" }}>

            <Card>
            <CardTitle><h1 ><n>{this.NombreTrabajo}</n></h1><hr/></CardTitle>
            <center>
                <Row>
                <Col sm={{ size: 'auto'}}>
                    <div style={{ paddingLeft:"5%" }}>
                        <img  src={this.Imagen}  alt="160" width="250" />
                    </div>
                </Col>
                <Col sm={{ size: 'auto'}}>
                    <div style={{ 'text-align': 'left' }}>
                    <br/>
                        <b>Nombre de la empresa:</b> {this.NombreEmpresa} <br/>
                        <b>Ubicacion:</b> {this.Ubicacion}<br/>
                        <b>Renumeración Aproximada:</b>{this.RemuneracionAproximada}
                        <n >{this.fecha}</n>
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
        )
        
    }
}

export default Cardwork
