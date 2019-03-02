import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
import Unnabvar from './Navbar/Unnabvar';
import NabvarRegister from './Navbar';
import { MenuP } from './Home/Menu';

export class Check extends Component {
    componentDidMount(){
        $.ajax({
          type:'GET',
          url:'https://shopping-123s.herokuapp.com/auth/validate_token',
          dataType:"JSON",
          headers: JSON.parse(sessionStorage.getItem('user'))
        })
      }
      

      render() {
        console.log(this.state)
        if(sessionStorage.getItem('user')){
            return (
                <div>
                    <NabvarRegister name={JSON.parse(sessionStorage.getItem('user')).uid}/>
                    <MenuP/>
                </div>
        )
        }else{
            return(
                <div>
                <Unnabvar/>
                <MenuP/>
                </div>
            )
        }
    }
    }
export default Check
