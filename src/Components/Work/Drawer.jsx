import { Drawer, Button } from 'antd'
import React, { Component } from 'react'


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
            <h6>
            <b>Nombre de la Empresa: </b>{this.props.NombreEmpresa}
            <br/><b>Perfil Requerido: </b>{this.props.PerfilRequerido}
            <br/><b>Nivel de Experticia: </b>{this.props.NivelExperticia}
            <br/><b>Ubicacion: </b>{this.props.Ubicacion}
            <br/><b>Horarios: </b>{this.props.Horarios}
            <br/><b>Benefícios: </b>{this.props.Benefícios}
            <br/><b>Ambiente Laboral: </b>{this.props.AmbienteLaboral}
            <br/><b>Tipo Contrato: </b>{this.props.TipoContrato}
            <br/><b>Remuneracion Aproximada: </b>{this.props.RemuneracionAproximada}
            <br/><b>Correo Electrónico: </b>{this.props.CorreoElectrónico}
            </h6>
            
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
