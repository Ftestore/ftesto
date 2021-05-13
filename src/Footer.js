import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget">
                            <h2>Холбоо барих</h2>
                            <div class="contact-info">
                                <p><i class="fa fa-map-marker"></i>Ulaanbaatar,Ikh Delguur</p>
                                <p><i class="fa fa-envelope"></i>sw17d015@mandakh.edu.mn</p>
                                <p><i class="fa fa-phone"></i>+97680186330</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget">
                            <h2>Follow Us</h2>
                            <div class="contact-info">
                                <div class="social">
                                    <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                                    <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                                    <a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget">
                            <h2>FTE дэлгүүр</h2>
                            <ul>
                                <li><a href="about">Бидний тухай</a></li>
                                <li><a href="sale">Хямдрал</a></li>
                                <li><a href="tuslamj">Тусламж</a></li>
                            </ul>
                        </div>
                    </div>

              
                </div>
                
                <div class="row payment align-items-center">
                    <div class="col-md-6">
                        <div class="payment-method">
                            <h2>We Accept:</h2>
                            <img src="img/payment-method.png" alt="Payment Method" />
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
            </div>
        )
    }
}
