import React from 'react'
import _Navbar from './NavBar';
// import { Carousel } from 'react-bootstrap';

import Carousel from '../Carousel'
import PureCarousel from '../PureCarousel';

class AppPage extends React.Component
{
    
    render(){
        return(
        <div>
            <Carousel dots={false}  infinite = {true} />
            <Carousel dots={true} slidesToScroll={3} infinite = {true} autoplay={ true} autoplaySpeed={1000}/>
            <PureCarousel />
        </div>
        )
    }

}

export default AppPage