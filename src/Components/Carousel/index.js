import React, { useState } from "react";
import Slider from "react-slick";
import CustomCard from "../utilities/CustomCard";


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

export default Carousel