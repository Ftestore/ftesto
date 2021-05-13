import React, { Component } from 'react'

export default class Subheader extends Component {
    state = {
        loadin: true,
        list: []
        
    }
    async componentDidMount(){
        const url= "http://127.0.0.1:5000/submenu";
        const response = await fetch(url);
        const data =await response.json();
        this.setState({list: data.data, loadin: false});
        console.log(data.data)
        
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
                 <div>
            <div class="header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <nav class="navbar bg-light">
                            <ul class="navbar-nav">
                            {this.state.list.map(li => (
                                       <li class="nav-item">
                                       <a class="nav-link" href={li.link}><i class="fa fa-microchip"></i>{li.name}</a>
                                   </li>
                                      ))}
                                
                            </ul>
                        </nav>
                    </div>
                    <div class="col-md-6">
                        <div class="header-slider normal-slider">
                            <div class="header-slider-item">
                                <img src="img/zuragt1.jpg" alt="Slider Image" width="100%" />
                                <div class="header-slider-caption">
                                    <p>Энэ хаврын онцлох цахилгаан бараа</p>
                                    <a class="btn" href=""><i class="fa fa-shopping-cart"></i>Худалдаж авах</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="header-img">
                            <div class="img-item">
                                <img src="img/zuragt.jpg" />
                                <a class="img-text" href="">
                                    <p></p>
                                </a>
                            </div>
                            <div class="img-item">
                                <img src="img/zuragt2.jpg" />
                                <a class="img-text" href="">
                                    <p></p>
                                </a>
                            </div>
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

