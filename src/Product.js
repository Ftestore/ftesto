import React, { Component } from 'react'

export default class Product extends Component {
    state = {
        loadin: true,
        list: []
        
    }
    async componentDidMount(){
        const url= "http://127.0.0.1:5000/Baraa";
        const response = await fetch(url);
        const data =await response.json();
        this.setState({list: data.data, loadin: false});
        console.log(data.data)
        
    }
    render() {
     
        return (
            
            <div>
                 <div class="featured-product product">
            <div class="container-fluid">
                <div class="section-header">
                    <h1>Онцлох бүтээгдэхүүн</h1>
                </div>
                
                <div class="navbar-nav mr-auto">
                
                                        <div class="row align-items-center product-slider product-slider-4">
                                        {this.state.list.map(li => (
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
                                                        <img src={li.image} style={{width:"200px", height:"200px"}} alt="Product Image"/>
                                                    </a>
                                                    <div class="product-action">
                                                        <a href="#"><i class="fa fa-cart-plus"></i></a>
                                                        <a href="#"><i class="fa fa-heart"></i></a>
                                                        <a href="#"><i class="fa fa-search"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-price">
                                                    <h3><span>₮</span>{li.price}</h3>
                                                    <a class="btn" href=""><i class="fa fa-shopping-cart"></i>Худалдаж авах</a>
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
