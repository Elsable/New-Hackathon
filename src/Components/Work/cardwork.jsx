import React, { Component } from 'react'
import { Card,Col ,  CardTitle   } from 'reactstrap'
import Drawers from './Drawer';
import { Row } from 'antd';
import {previewImage} from 'zent'

const Imagen = [
  "http://unicorniogt.com/wp-content/uploads/2017/03/logotipo_unicornio.fw_.png"
    
  ];
  
export class Cardwork extends Component {
NombreTrabajo="Programador fullstack";
NombreEmpresa="Programadores Chile";
PerfilRequerido="Programar en ruby, saber Rails";
NivelExperticia="Junior";
Ubicacion="Ixmiquilpan";
Horarios="2:34-10:20";
Benefícios="Desayunos gratis y viernes de alegria(sale una hora antes)";
AmbienteLaboral="Al trabajar con nosotros podras aprender nuevos retos";
TipoContrato="Indifinido";
RemuneracionAproximada="$1500";
CorreoElectrónico="contacto@programadoreschile.com";
Imagen="https://programadoreschile.org/assets/img/logo.png"
Imagen1="https://i.blogs.es/8b09a4/progate_featuredimage/450_1000.jpg"
Imagen2="https://img.blogs.es/anexom/wp-content/uploads/2018/03/Programar.jpg"
Imagen3="https://cdn-images-1.medium.com/max/1200/0*owwiuHZkUm4AMr-i.png"
Imagen4="https://d8bwfgv5erevs.cloudfront.net/cdn/13/images/curso-online-ruby-on-rails_l_primaria_1_1520261687.jpg"
Imagen5="https://d8bwfgv5erevs.cloudfront.net/cdn/13/images/curso-online-ruby-on-rails_l_primaria_1_1520261687.jpg"
Imagen6="https://d8bwfgv5erevs.cloudfront.net/cdn/13/images/curso-online-ruby-on-rails_l_primaria_1_1520261687.jpg"
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
        Imagen1:"",
        Imagen2:"",
        Imange3:"",
        Imagen4:"",
        Hace:""
    };   
}
 handlePreview = (e) => {
    previewImage({
      images: Imagen,
      index: Imagen.indexOf(e.target.src),
      parentComponent: this,
      scaleRatio: 3
    });
  }
//   handlePrevyy

    render() {
        
        return (
            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <div className="gutter-box" style={{ paddingTop:"3%" }}>
    
            <Card>
            <CardTitle><h1 ><b>{this.NombreTrabajo}</b></h1><hr/></CardTitle>
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
                    <div style={{ 'textAlign': 'left' }}>
                    <br/>
                        <b>Nombre de la empresa:</b> {this.NombreEmpresa} <br/>
                        <b>Ubicacion:</b> {this.Ubicacion}<br/>
                        <b>Renumeración Aproximada:</b>{this.RemuneracionAproximada}<br/>
                        
                    </div>
                    
                    </div>
                </Col>
                
                </Row>
                {/* <div style={{ 'text-align': 'right'}}> */}
                <Drawers NombreTrabajo={this.NombreTrabajo}
                NombreEmpresa={this.NombreEmpresa}
                PerfilRequerido={this.PerfilRequerido}
                NivelExperticia={this.NivelExperticia}
                Ubicacion={this.Ubicacion}
                Horarios={this.Horarios}
                Imagen={this.Imagen}
                Imagen1={this.Imagen1}
                Imagen2={this.Imagen2}
                Imagen3={this.Imagen3}
                Imagen4={this.Imagen4}
                Imagen5={this.Imagen5}
                Imagen6={this.Imagen6}
                Benefícios={this.Benefícios}
                AmbienteLaboral={this.AmbienteLaboral}
                TipoContrato={this.TipoContrato}
                RemuneracionAproximada={this.RemuneracionAproximada}
                CorreoElectrónico={this.CorreoElectrónico}
                />
                
                    {/* </div> */}
            </center>
            <br/>    
            </Card>
            
            </div>
            </div>
        )
        
    }
}

export default Cardwork
