import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
import Unnabvar from './Navbar/Unnabvar';
import OnnavBar from './Navbar/Onnavbar';
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
                    <OnnavBar/>
                </div>
        )
        }else{
            return(
                <Unnabvar/>
            )
        }
    }
    }
export default Check
