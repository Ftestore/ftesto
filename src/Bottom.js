import React, { Component } from 'react'

export default class Bottom extends Component {
    state = {
        loadin: true,
        list: []
        
    }
    async componentDidMount(){
        const url= "http://127.0.0.1:5000/bottom";
        const response = await fetch(url);
        const data =await response.json();
        this.setState({list: data.data, loadin: false});
        console.log(data.data)
        
    }
    render() {
        return (
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
                            <input type="text" placeholder="Search"/>
                            <button><i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-3">
                        
                        <div class="user">
                            <a href="wishlist.html" class="btn wishlist">
                                <i class="fa fa-heart"></i>
                                <span>(0)</span>
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
        )
    }
}
