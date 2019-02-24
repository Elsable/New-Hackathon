import React, { Component } from 'react'
import { Link, Redirect,withRouter} from 'react-router-dom'
import { Affix,Notify } from 'zent';

import $ from 'jquery'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import { Part1 } from './part1';
 

export class OnnavBar extends Component {

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
    handleSignOut=(e)=>{
        e.preventDefault()
        $.ajax({
        type:'DELETE',
        url:"https://shopping-123s.herokuapp.com/auth/sign_out",
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
    
  render() {
    return (
        <Affix offsetTop={0}>
        <div  className="ant-menu-dark">
            <br/>
          <Part1/>
          <br/>
        </div>
        </Affix>
    )
  }
}

export default OnnavBar
