
import { Link, withRouter } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem } from 'reactstrap';
import React, { Component } from 'react'
import $ from 'jquery'
import { Notify } from 'zent';

export class NabvarRegister extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false
        };
    }

    handleSignOut=(e)=>{
        e.preventDefault()
        $.ajax({
        type:'DELETE',
        url:"http://localhost:3001/auth/sign_out",
        url:"https://server-gpaj.herokuapp.com/auth/sign_out",
        data: JSON.parse(sessionStorage.user),
        success: function() {
            Notify.config({ duration: 5000 })
            Notify.success('Se ha cerrado sessión')
        }
        })
        .done(()=>{
        sessionStorage.removeItem('user')
        this.props.history.push('/');

        })
    }
    
toggle() {
    this.setState({
    isOpen: !this.state.isOpen
    });
}
render() {
    return (
    <div>
        <Navbar color="dark" light expand="md" className=" navbar-dark bg-dark">
            <Link to="/"><NavbarBrand>
            <Link to="/User/edit">
            HACKThon {this.props.name}
            </Link></NavbarBrand></Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
            
            <NavLink  >
            
            <button   onClick={this.handleSignOut}  className="btn btn-primary btn-outline-light my-2 my-sm-0 btn-succes" type="submit">Cerrar Sesión</button>
            
            </NavLink>
            </NavItem>
            
            </Nav>
        </Collapse>
        </Navbar>  
    </div>
    )
}
}

export default withRouter(NabvarRegister)
