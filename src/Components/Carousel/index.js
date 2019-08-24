import React, { useState } from "react";
import Slider from "react-slick";
import { Card , Row} from 'react-bootstrap'


function Carousel({ dots, slidesToScroll , infinite  , autoplay, autoplaySpeed}) {
    const settings = {
        dots: dots,
        infinite: infinite || false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: slidesToScroll || 1,
        autoplay: autoplay || false,
        autoplaySpeed: autoplaySpeed,
      };
    return(
    <div className="slider-view">
        <Slider {...settings}>
        { 
            [1,2,3,4,1,2,3,4,1,2,3,4,].map((val,index) =>{
                    return <CustomCard img ={`https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract0${val}.jpg`} index={index} key={index}/>
            })
        }
        </Slider>
    </div>
    )
}


function CustomCard({img,index}){
    return (
    <Card style={{ width: '18rem' }} >
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>Card Title {index+1} </Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
    </Card>
    )
}

export default Carousel