import React, { Component } from 'react';
import Navbar from '../Components/Navbar/Nav.js'
import Carousel from "../Components/Carousel/Carousel.js"
import Cards from "../Components/Cards/Cards.js"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <Navbar/>
            <br/>
            <Carousel/>
            <br/>
            <Cards/>
            </div>
         );
    }
}
 
export default Home;