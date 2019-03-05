import { Drawer, Button } from 'antd'
import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import Cardimage from './cardimage';

export class Drawers extends Component {

    
    state = { visible: false, childrenDrawer: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    showChildrenDrawer = () => {
        this.setState({
            childrenDrawer: true,
        });
    };

    onChildrenDrawerClose = () => {
        this.setState({
            childrenDrawer: false,
        });
    };

    render() {
        
        if(this.props.Imagen1.length>5){
            if(this.props.Imagen2.length>5){
                if(this.props.Imagen3.length>5){
                    if(this.props.Imagen4.length>5){
                        if(this.props.Imagen5.length>5){
                            if(this.props.Imagen6.length>5){
                                var PasImagen2 = [
                                    this.props.Imagen1, 
                                    this.props.Imagen2, 
                                    this.props.Imagen3,
                                    this.props.Imagen4,
                                    this.props.Imagen5,
                                    this.props.Imagen6]
                            }else{
                                PasImagen2 = [
                                    this.props.Imagen1,
                                    this.props.Imagen2,
                                    this.props.Imagen3,
                                    this.props.Imagen4,
                                    this.props.Imagen5]
                            }
                        }else{
                            PasImagen2 = [
                                this.props.Imagen1,
                                this.props.Imagen2,
                                this.props.Imagen3,
                                this.props.Imagen4]
                        }
                    }else{
                        PasImagen2 = [
                            this.props.Imagen1,
                            this.props.Imagen2,
                            this.props.Imagen3]
                    }
                }else{
                    PasImagen2 = [
                        this.props.Imagen1,
                        this.props.Imagen2]
                }
            }
            if(this.props.Imagen1.length>0){

            }else{
                var PasImagen2 = [
                    "Error"]
            }
        }
        
        return (
            <div className="container">
            <Button type="primary" onClick={this.showDrawer}>
            Ver mas...
            </Button>
            <Drawer
            title={this.props.NombreTrabajo}
            width={'65%'}
            height={'bottom'}
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
            >
            <div>
            <Row>
                    <Col>
                <center>
                <img  src={this.props.Imagen}  alt="500" width="500" />
                <hr/>
                </center>             
                <br/>
                </Col>
                </Row>
            <Row>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <p className="h6">
                        <b>Nombre de la Empresa: </b>{this.props.NombreEmpresa}
                        <br/><br/><b>Perfil Requerido: </b>{this.props.PerfilRequerido}
                        <br/><br/><b>Nivel de Experticia: </b>{this.props.NivelExperticia}
                        <br/><br/><b>Ubicacion: </b>{this.props.Ubicacion}
                        <br/><br/><b>Horarios: </b>{this.props.Horarios}
                        <br/><br/><b>Benefícios: </b>{this.props.Benefícios}
                        <br/><br/><b>Ambiente Laboral: </b>{this.props.AmbienteLaboral}
                        <br/><br/><b>Tipo Contrato: </b>{this.props.TipoContrato}
                        <br/><br/><b>Remuneracion Aproximada: </b>{this.props.RemuneracionAproximada}
                        <br/><br/><b>Correo Electrónico: </b>{this.props.CorreoElectrónico}
                        <br/><br/><br/><br/>
                    </p>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                
                    <Cardimage PasImagen2={PasImagen2}/>
                
            </div>
            </Row> 
            </div>
            <Drawer
                title="Two-level Drawer"
                width={'75%'}
                closable={false}
                onClose={this.onChildrenDrawerClose}
                visible={this.state.childrenDrawer}
            >
                This is two-level drawer
                
                <Button
                style={{
                    marginRight: 8,
                }}
                onClick={this.onChildrenDrawerClose}
                >Cancelar</Button>
            </Drawer>
            <div
                style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                borderTop: '1px solid #e8e8e8',
                padding: '10px 16px',
                textAlign: 'right',
                left: 0,
                background: '#fff',
                borderRadius: '0 0 4px 4px',
                }}
            >
                <Button
                style={{
                    marginRight: 8,
                }}
                onClick={this.onClose}
                >
                Cancelar
                </Button>
                <Button onClick={this.showChildrenDrawer} type="primary">
                Postularse
                </Button>
            </div>
            </Drawer>
        </div>
        )
    }
}

export default Drawers
