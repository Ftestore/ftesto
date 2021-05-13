import React, { Component } from 'react'
import Header from './Header'
export default class Register extends Component {
    state = {
        credentials: {Firstname:'',Lastname: '',Email:'',Phone:'',Password: '',Repassword:''}
      }
      register = event => {
        fetch('http://127.0.0.1:5000/register', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(this.state.credentials)
        })
        .then( data => data.json())
        .then(
          data => {
            console.log(data.token);
          }
        )
        .catch( error => console.error(error))
      }
      inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
      }

  
    render() {
        return (
            <div>
                <Header/>
                <div class="login">
            <div class="container-fluid">
                <div class="row">
                    
                    <div class="col-lg-6">    
                        <div class="register-form">
                            <div class="row">
                                <div class="col-md-6">
                                    <label>First Name</label>
                                    <input invalid={false} class="form-control" type="text" placeholder="First Name"
                                    />
                                  
                               
                                </div>
                                <div class="col-md-6">
                                    <label>Lastname</label>
                                    <input invalid={false} class="form-control" type="text" placeholder="Password"
                             />
                                </div>
                                <div class="col-md-6">
                                    <label>Email</label>
                                    <input invalid={false} class="form-control" type="text" placeholder="Password"
                                  />
                                </div>
                                <div class="col-md-6">
                                    <label>Phone</label>
                                    <input invalid={false} class="form-control" type="text" placeholder="Password"
                                   />
                                </div>
                                <div class="col-md-6">
                                    <label>Password</label>
                                    <input invalid={false} class="form-control" type="text" placeholder="Password"
                                   />
                                </div>
                                <div class="col-md-6">
                                    <label>Repassword</label>
                                    <input invalid={false} class="form-control" type="text" placeholder="Password"
                                  />
                                </div>
                            </div>
                            <button onClick={this.register}>Register</button>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
            </div>
        )
    }
}
