import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link} from 'react-router-dom'
import $ from 'jquery';

import { Notify } from 'zent';
export class Sign_in extends Component {
    
    handleLogin = (e) => {
        e.preventDefault();
        $.ajax({
          type: 'POST',
          url:'https://shopping-123s.herokuapp.com/auth/sign_in',
          data: {
            email: this.email.value,
            password: this.password.value
          },
          success: function() {
            Notify.config({ duration: 5000 })
            Notify.success('Bienvenido a nuestra plataforma')
          },
          error: function () {
            Notify.config({ duration: 3000 })
            Notify.error(' Esta cuenta no existe :(')
          }
          
        })
        .done((response, status, jqXHR) => {
          sessionStorage.setItem('user',
            JSON.stringify({
              'access-token': jqXHR.getResponseHeader('access-token'),
              client: jqXHR.getResponseHeader('client'),
              uid: response.data.uid
            }));
          this.props.history.push('/');
          
        })
      }

    render() {
      return (
        <div className="">
        <center>
          <h1>Registrar Usuario</h1>
          </center>
          <hr/>
          <div className="row">
            <div className="col s8 offset-s2">
            <Form onSubmit={this.handleLogin} >
            <FormGroup>
              <Label for="user_email" className="form-control-label email optional">Email</Label>
              <input className="form-control password optional"   name="email" ref={(input) => this.email = input }  id="email" placeholder="Email" autoComplete ="email" autoFocus="autofocus"/>
              
            </FormGroup>

            <FormGroup className="form-group password optional user_password">
                <Label className="form-control-label password optional" for="user_password">Password</Label>
                  <input  className="form-control password optional"  name="password" type="password" ref={(input) => this.password = input } autoComplete="current-password" placeholder="Password" id="password" />
            </FormGroup>
            
            <FormGroup check className="form-group boolean optional user_remember_me" >
                <Label check className="form-control-label boolean optional" for="user_remember_me">
                    <Input name="user[remember_me]" type="hidden" value="0"/>
                    <Input id="user_remember_me" type="checkbox" className="boolean optional check_boxes" value="1" name="remember_me"/>{' '}
                    Remember me
                </Label>
            </FormGroup>
            <div className="form-actions">
            <Button type="submit" className="btn btn-success btn-sm "data-disable-with="Sign up" > Iniciar Sesión</Button>
            
            </div>
          
          </Form>
          <br/>
              <hr/>
              <center>
                <Link to="#" className="Link-user " onClick={(event) => { this.props.funcioncerrar(); this.props.funcionabrir();}}>Don't have an account yet?</Link><br />
                <Link to="/users/notifications/" className="Link-user " >Forgot your password?</Link><br />
                <br/>
              </center>
          </div>
          
          </div>
        </div>
      );
      
 
    }
}

export default Sign_in
