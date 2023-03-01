import React from 'react';
import '../../App.css';
import AboutUs from '../AboutUs';
import Cards from '../Cards';
import TopSec from '../TopSec';
import Prices from './Prices';
import Navbar from '../Navbar';
import Footer from '../Footer';



function Home(){
    return(
    <>
    <Navbar />
    <TopSec />
    <AboutUs />
    <Cards />  
    <Prices />
    <Footer />
    </>
    );
}

export default Home;