import React from 'react'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import CustomCard from '../utilities/CustomCard'


class PureCarousel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            visibleSlides:3
        }
    }
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    componentWillMount(){
        window.removeEventListener('resize', this.resize.bind(this));
    }

    resize() {
        let width = window.innerWidth
        if(width > 1439){
            this.setState({visibleSlides:4})
        }
        else if(width > 1023){
            this.setState({visibleSlides:3})
        }
        else{
            this.setState({visibleSlides:1})
        }
    }
    

    render(){
        let {visibleSlides} = this.state
        return(
        <div className="slider-view">
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={150}
                totalSlides={12}
                visibleSlides={visibleSlides}
            >
                <Slider>
                {
                    [1,2,3,4,1,2,3,4,1,2,3,4,].map((val,index) =>(
                        <Slide index={index}>
                           <CustomCard img ={`https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract0${val}.jpg`} index={index} key={index}/>
                        </Slide>    
                    ))
                }
                </Slider>
            </CarouselProvider> 
        </div>
        )
    }
}

export default PureCarousel