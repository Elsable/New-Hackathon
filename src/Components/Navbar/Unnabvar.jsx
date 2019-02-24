

import { Link } from 'react-router-dom'
import { Menu,  } from 'antd';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem } from 'reactstrap';
import React, { Component } from 'react'


const SubMenu = Menu.SubMenu;

export default class Unnabvar extends Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

render() {
    return (
        <Navbar color="dark" light expand="md" className=" navbar-dark bg-dark">
            <Link to="/"><NavbarBrand>HACKThon</NavbarBrand></Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
            <NavLink  ><Link to="/Sign_in/">
            <button class="btn btn-primary btn-outline-light my-2 my-sm-0" type="submit">Iniciar Sesión</button>
            </Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink  ><Link to="/Sign_up/">
            <button class="btn btn-primary btn-outline-light my-2 my-sm-0 btn-succes" type="submit">Registrate</button>
            </Link></NavLink>
            </NavItem>
            
            </Nav>
        </Collapse>
        </Navbar>
    
        
    
    )
}
}




// export const Navbar = () => (

// <Fragment>
//         <nav class="navbar is-transparent">
//   <div class="navbar-brand">
//     <a class="navbar-item" href="https://bulma.io">
//       <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
//     </a>
//     <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
//       <span></span>
//       <span></span>
//       <span></span>
//     </div>
//   </div>

//   <div id="navbarExampleTransparentExample" class="navbar-menu">
//     <div class="navbar-start">
//       <a class="navbar-item" href="https://bulma.io/">
//         Home
//       </a>
//       <div class="navbar-item has-dropdown is-hoverable">
//         <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
//           Docs
//         </a>
//         <div class="navbar-dropdown is-boxed">
//           <a class="navbar-item" href="https://bulma.io/documentation/overview/start/">
//             Overview
//           </a>
//           <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
//             Modifiers
//           </a>
//           <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
//             Columns
//           </a>
//           <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
//             Layout
//           </a>
//           <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
//             Form
//           </a>
//           <hr class="navbar-divider"/>
//           <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
//             Elements
//           </a>
//           <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
//             Components
//           </a>
//         </div>
//       </div>
//     </div>

//     <div class="navbar-end">
//       <div class="navbar-item">
//         <div class="field is-grouped">
//           <p class="control">
//             <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
//               <span class="icon">
//                 <i class="fab fa-twitter"></i>
//               </span>
//               <span>
//                 Tweet
//               </span>
//             </a>
//           </p>
//           <p class="control">
//             <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.4/bulma-0.7.4.zip">
//               <span class="icon">
//                 <i class="fas fa-download"></i>
//               </span>
//               <span>Download</span>
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </nav>
//     </Fragment>
// )