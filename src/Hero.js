import React from "react";
import Header from "./Header";
import Bottom from "./Bottom";
import Subheader from "./Subheader";
import Product from "./Product"
import Footer from "./Footer";
const Hero = ({ handleLogout }) => {
  return (
    <section className="hero">
      <nav>
        <Header/>
        <button className="garah" onClick={handleLogout}>Гарах</button>
      </nav>
      <Bottom/>
      <Subheader/>
      <Product/>
      <Footer/>
    </section>
  );
};
export default Hero;