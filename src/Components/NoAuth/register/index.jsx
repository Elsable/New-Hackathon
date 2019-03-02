import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import { FormWithConstraints, FieldFeedbacks, FieldFeedback }from 'react-form-with-constraints'
import $ from 'jquery';
import { Notify } from 'zent';
import axios from 'axios'

class Register extends Component {

    constructor(props){
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.state={
            email: "",
            password: "",
            password_confirmation: "",
            errors: {}
          }
      }
    onChange = e => {
      this.form.validateFields(e.target);
      this.setState({ [e.target.id]: e.target.value });
    
    };
    handleRegister = (e) => {
        e.preventDefault();
        this.form.validateFields();
        if (!this.form.isValid()) {
          Notify.config({ duration: 3000 })
          Notify.error('Error debe escribir su Email')
          
        
        } else {
        
        

        if(
          this.state.password.length > 5 &&
          this.state.password_confirmation === this.state.password
      ){
        $.ajax({
          type: 'POST',
          url:'https://shopping-123s.herokuapp.com/auth',
          data: {
            email: this.email.value,
            password: this.password.value,
            password_confirmation: this.password.value
          },
          success: function() {
            Notify.config({ duration: 5000 })
            Notify.success('Bienvenido a nuestra plataforma')
          },
          error: function () {
            Notify.config({ duration: 3000 })
            Notify.error('Error \n Esta cuenta ya existe :(')
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
      else{
        Notify.config({ duration: 3000 })
            Notify.error('Error las contraseñas no coinciden')
      }
    }
  }

  render() {
    const { errors } = this.state
    return (
      <div className="">
      <center>
        <h1>Registrar Usuario</h1>
        </center>
        <hr/>
        <div className="row">
          <div className="col s8 offset-s2">
        <FormWithConstraints
          ref={form => this.form = form}
          method="POST" 
          onSubmit={this.handleRegister}
          noValidate>
              <FormGroup className="form-group email required user_email">
                <Label for="user_email" className="form-control-label email required">Email
                <abbr tittle="required">*</abbr>
                </Label>
                <input className="form-control string email required"   ref={(input) => this.email = input } type="email" name="email" id="email" placeholder="Email" autoComplete ="email" autoFocus="autofocus" required="required" onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  />
            <FieldFeedbacks for="email">
              <FieldFeedback when="*" />
            </FieldFeedbacks>
            </FormGroup>
            <FormGroup className="form-group password required user_password">
                            <Label className="form-control-label password required" for="user_password">Password
                            <abbr tittle="required">*</abbr>
                            </Label>
                            <input  className="form-control password required"  name="password" type="password" ref={(input) => this.password = input } autoComplete="new-password" placeholder="Password" id="password"  required="required" aria-required="true" aria-autocomplete="list"    onChange={this.onChange}/>
                            
                                
                                
                                
                            <small className="form-text text-muted">6 characters minimun</small>
                            <FieldFeedbacks for="password">
                              <FieldFeedback when="valueMissing" />
                              <FieldFeedback when="patternMismatch">
                                Should be at least 5 characters long
                              </FieldFeedback>
                              <FieldFeedback when={value => !/\d/.test(value)} warning>
                                Should contain numbers
                              </FieldFeedback>
                              <FieldFeedback when={value => !/[a-z]/.test(value)} warning>
                                Should contain small letters
                              </FieldFeedback>
                            </FieldFeedbacks>
        </FormGroup>
        <FormGroup className="form-group password required user_password_confirmation">
                            <Label className="form-control-label password required" for="user_password_confirmation">Password confirmation
                            <abbr tittle="required">*</abbr>
                            </Label>
                            
                            <input  className="form-control password required"  name="password_confirmation" type="password" ref={(input) => this.password = input } autoComplete="new-password" placeholder="Password" id="password_confirmation"  required="required" aria-required="true" aria-autocomplete="list"    onChange={this.onChange}/>
                            
                <FieldFeedbacks for="password_confirmation">
                <FieldFeedback when="*" />
                </FieldFeedbacks>
        </FormGroup>

          <div className="col-md-12 form-actions">
          <center>
            <Button  type="submit" name="commit" value="Registrar" className="Link-user btn-large btn btn-success "data-disable-with="Sign up">Crear cuenta</Button>
          </center>
        </div>
        </FormWithConstraints>
        <br/>
            <hr/>
            <center>
                <Link to="/user/Sign_in" className="Link-user " >Already have an account?</Link><br />
            <br/>
            </center>
        </div>
        
        </div>
      </div>
    );
  }
}
export  default Register