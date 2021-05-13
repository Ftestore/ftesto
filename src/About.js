import React, { Component } from 'react'
import Bottom from './Bottom';
import Header from './Header';
import {useState} from 'react'
import Footer from './Footer';

export default class About extends Component {
    state = {
        loadin: true,
        list: [],
        search:'',
        count:0
        
    }
    async componentDidMount(){
        const url= "http://127.0.0.1:5000/about";
        const response = await fetch(url);
        const data =await response.json();
        this.setState({list: data.data, loadin: false});
        console.log(data.data)
        
    }
  
    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
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
                <Header/>
                <div>
                <div>
            <div class="bottom-bar">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-md-3">
                        <div class="logo">
                            <a href="index.html">
                                <img src="img/logo.ico" alt="Logo"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        
                        <div class="search">
                            
                            <input type="text" 
                            placeholder="Search"
                            onChange={(event)=>{
                                this.setState({search:event.target.value})
                            }}
                            />
                            <button><i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-3">
                   
                        <div class="user">
                            <a href="wishlist.html" class="btn wishlist">
                                
                                <i class="fa fa-heart"></i>
                                <span>{this.state.count}</span>
                        
                            </a>
                            <a href="cart.html" class="btn cart">
                                <i class="fa fa-shopping-cart"></i>
                                <span>(0)</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
            </div>
                 <div >
            <div >
                <div class="ab">
                    
                    <h3> Бидний тухай</h3>
                
                    <img src="img/furniture-store.jpg" style={{width:"800px"}}></img>
                </div>
                <div >
                                        <div >
                                        {this.state.list.filter((li)=>{
                                            if(this.state.search==""){
                                                return li
                                            }
                                            else if (li.name.toLowerCase().includes(this.state.search.toLocaleLowerCase()))
                                            {
                                                return li
                                            }
                                        })
                                        .map(li => (
                                        <div >
                                            <div >
                                                <div class="ab">
                                                    <a >{li.desc}</a>
                                                </div>
                                            </div>
                                        </div>
                                         ))}
                                    </div>
            
                                     
            </div>
            </div>
        </div>
        <div className="ftr">
        <Footer/>
        </div>
       
            </div>
           
        )
    }
}
