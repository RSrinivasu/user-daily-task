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
            {/* <Carousel dots={false}  infinite = {true} />
            <Carousel dots={true} slidesToScroll={3} infinite = {true} autoplay={ true} autoplaySpeed={1000}/>
            <PureCarousel /> */}
            <h1>Home page</h1>

        </div>
        )
    }

}

export default AppPage