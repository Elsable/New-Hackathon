import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import $ from 'jquery';
export class Delete extends Component {

    handleSignOut=(e)=>{
        e.preventDefault()
        $.ajax({
        type:'DELETE',
        url:"http://localhost:3001/auth/",
        // url:"https://server-gpaj.herokuapp.com/auth/",
        data: JSON.parse(sessionStorage.user),
        
        })
        .done(()=>{
        sessionStorage.removeItem('user')
        this.props.history.push('/');

        })
    }

  render() {
    return (
      <div>
        <h3>Cancel my account</h3>
		<input data-confirm="Are you sure?" type="submit" onClick={this.handleSignOut}/>
      </div>
    )
  }
}

export default withRouter(Delete)
