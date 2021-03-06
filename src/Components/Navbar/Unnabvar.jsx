

import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem } from 'reactstrap';
import React, { Component } from 'react'
import { Dialog} from 'zent';
import Register from '../NoAuth/register';
import Sign_in from '../NoAuth/login';


export default class Unnabvar extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      visible_up: false,
      visible_in: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  Sign_up = visible_up => {
    this.setState({ visible_up });
  };
  Sign_in = visible_in=>{
    this.setState({visible_in})
  }

  

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

render() {
    return (
      <div>
         
        <Navbar color="dark" light expand="md" className=" navbar-dark bg-dark">
        <NavbarBrand><Link to="/">HACKThon</Link></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
            <NavLink  >
              {/* <Link to="/Sign_in/"> */}
              <button onClick={()=>this.Sign_in(true)} className="btn btn-primary btn-outline-light my-2 my-sm-0" type="submit">Iniciar Sesión</button>
              {/* </Link> */}
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink  >
            {/* <Link to="/Sign_up/"> */}
            <button   onClick={() => this.Sign_up(true)} className="btn btn-primary btn-outline-light my-2 my-sm-0 btn-succes" type="submit">Registrate</button>
            {/* </Link> */}
            </NavLink>
            </NavItem>
            
            </Nav>
        </Collapse>
        </Navbar>
        <Dialog
          visible={this.state.visible_up}
          onClose={() => this.Sign_up(false)}
        >
        
          <Register funcioncerrar={() => this.Sign_in(true)} funcionabrir={() => this.Sign_up(false)}/>
        
        </Dialog>
        <Dialog
          visible={this.state.visible_in}
          onClose={() => this.Sign_in(false)}
        >
          <Sign_in funcioncerrar={() => this.Sign_in(false)} funcionabrir={() => this.Sign_up(true)}/>

        </Dialog>
        
    </div>
        
    
    )
}
}

