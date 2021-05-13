import React, { Component } from 'react'
import Bottom from './Bottom';
import Header from './Header';
import {useState} from 'react';
import history from './history';

export default class Buidan extends Component {
    handleClick(){
        history.push('/detail')
    }
    state = {
        loadin: true,
        list: [],
        search:'',
        count1:0,
        count2:0
    }
    async componentDidMount(){
        const url= "http://127.0.0.1:5000/buidan";
        const response = await fetch(url);
        const data =await response.json();
        this.setState({list: data.data, loadin: false});
        console.log(data.data)
        
    }
  
    increment=()=>{
        this.setState({
            count1:this.state.count1+1
        })
    }
    increments=()=>{
        this.setState({
            count2:this.state.count2+1
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
                                <span>{this.state.count1}</span>
                        
                            </a>
                            <a href="cart.html" class="btn cart">
                                <i class="fa fa-shopping-cart"></i>
                                <span>{this.state.count2}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
            </div>
                 <div class="featured-product product">
            <div class="container-fluid">
                <div class="section-header">
                    <h1> Буйдан</h1>

                </div>
                <div class="navbar-nav mr-auto">
                                        <div class="row align-items-center product-slider product-slider-4">
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
                                        <div class="col-lg-3">
                                            <div class="product-item">
                                                <div class="product-title">
                                                    <a href="#">{li.name}</a>
                                                    <div class="ratting">
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                        <i class="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <div class="product-image">
                                                    <a href="product-detail.html">
                                                        <img src={li.image} alt="Buidan Image" style={{width:"200px",height:"200px"}}/>
                                                    </a>
                                                    <div class="product-action">
                                                        <a href="#">
                                                        <i onClick={this.increments} class="fa fa-cart-plus"></i></a>
                                                        <a href="#">
                                                        <i onClick={this.increment} class="fa fa-heart"></i>
                                                            </a>
                                                        <a href="#"><i class="fa fa-search"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-price">
                                                    <h3><span>₮</span>{li.une}</h3>
                                                    <button class="btn" onClick={(e)=>this.handleClick(e)}>
                                                        <i class="fa fa-shopping-cart"></i>Худалдаж авах</button>
                                                </div>
                                            </div>
                                        </div>
                                         ))}
                                    </div>
            
                                     
            </div>
            </div>
        </div>
            </div>
        )
    }
}
