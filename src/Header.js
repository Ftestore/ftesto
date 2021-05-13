import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    state = {
        loadin: true,
        list: [],
        newtreh:[]
        
    }
    async componentDidMount(){
        const url= "http://127.0.0.1:5000/menu";
        const response = await fetch(url);
        const data =await response.json();
        this.setState({list: data.data, loadin: false});
        this.setState({newtreh:data.data[6]})
      
        
    }
    render() {
        if (this.state.loadin){
            return <div>loading</div>;
         }
         if (!this.state.list.length){
             return <div>didn get menu list</div>;
         }
        return (
            <div>
                  <div class="nav">
            <div class="container-fluid">
                <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                    <a href="#" class="navbar-brand">MENU</a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                  
                        <div class="navbar-nav mr-auto">
                        {this.state.list.map(li => (
                                       <a href={li.link} class="nav-item nav-link">{li.name}</a>
                                      ))}
                        </div>
                        <div>

                        </div>
                     
                    </div>
                </nav>
            </div>
        </div>
            </div>
        )}
    }


