import React from "react";
import './SimpleSlider.css'
import {connect} from "react-redux";
import SimpleSlider from "./SimpleSlider";
import * as axios from "axios";
import {setSlider1, setSlider2, setSlider3} from "../../../../redux/slider-reducer";
import NavSlide from "./NavSlide/NavSlide";
import Slide from "./Slide/Slide";
import Slider from "react-slick";

class SimpleSliderContainer extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/v1/slider1`)
            .then(response => {
                this.props.setSlider1(response.data)
            });

        axios.get(`http://127.0.0.1:8000/api/v1/slider2`)
            .then(response => {
                this.props.setSlider2(response.data)
            });

        axios.get(`http://127.0.0.1:8000/api/v1/slider3`)
            .then(response => {
                this.props.setSlider3(response.data)
            });

        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });

    }


    render() {

        const settings = {
            arrows: true,
            dots: false,
            slidesToShow: 1,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 6000,
            asNavFor: this.state.nav2,
            ref: slider => (this.slider1 = slider),

            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        dots: true
                    }
                }
            ]
        };


        const settings2 = {
            arrows: false,
            dots: false,
            slidesToShow: 2,
            asNavFor: this.state.nav1,
            ref: slider => (this.slider2 = slider),
            swipeToSlide: true,
            focusOnSelect: true,


            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 551,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 1441,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        };
        debugger
        return (
           <><div className="wrapper">
               <div className="slider">
                   <Slider  {...settings}>

                       <div className="slider__item">
                           <Slide
                               img={this.props.slider1[0].project.image}
                               imgMobile={this.props.slider1[0].project.image}
                               title={this.props.slider1[0].project.title}
                               content={this.props.slider1[0].project.description}
                               data={this.props.slider1[0].project.created_at}
                               id={this.props.slider1[0].project.id}
                                type={'projects'}>
                           </Slide>
                       </div>

                       <div className="slider__item filter">
                           <Slide
                               img={this.props.slider2[0].news.image}
                               imgMobile={this.props.slider2[0].news.image}
                               title={this.props.slider2[0].news.title}
                               content={this.props.slider2[0].news.description}
                               data={this.props.slider2[0].news.created_at}
                               id={this.props.slider2[0].news.id}
                           type={'news'}></Slide>
                       </div>
                       <div className="slider__item filter">
                           <Slide
                               img={this.props.slider3[0].event.image}
                               imgMobile={this.props.slider3[0].event.image}
                               title={this.props.slider3[0].event.title}
                               content={this.props.slider3[0].event.description}
                               data={this.props.slider3[0].event.created_at}
                               id={this.props.slider3[0].event.id}
                           type={'events'}/>
                       </div>


                   </Slider>

                   <div className="nav-slider" >
                       <div className="container">
                           <svg aria-hidden="true"
                                focusable="false"
                                data-prefix="fa"
                                data-icon="chevron-left"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                                className="nav-slider__control nav-slider__control--prev svg-inline--fa fa-chevron-left fa-w-10">
                               <path data-v-74622ff2=""
                                     fill="currentColor"
                                     d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                                     className=""
                                     data-darkreader-inline-fill=""/>
                           </svg>
                           <svg  aria-hidden="true"
                                 focusable="false"
                                 data-prefix="fa"
                                 data-icon="chevron-right"
                                 role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                                 className="nav-slider__control nav-slider__control--next svg-inline--fa fa-chevron-right fa-w-10">
                               <path data-v-74622ff2="" fill="currentColor"
                                     d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                                     className="" />
                           </svg>
                           <Slider className={"nav-slider__wrapper"} {...settings2}>

                               <NavSlide
                                   img={this.props.slider1[0].project.image}
                                   title={this.props.slider1[0].project.title}
                                   content={this.props.slider1[0].project.description}
                                   data={this.props.slider1[0].project.created_ad}
                                   id={this.props.slider1[0].project.id}/>
                               <NavSlide
                                   img={this.props.slider2[0].news.image}
                                   title={this.props.slider2[0].news.title}
                                   content={this.props.slider2[0].news.description}
                                   data={this.props.slider2[0].news.created_ad}
                                   id={this.props.slider2[0].news.id}/>
                               <NavSlide
                                   img={this.props.slider3[0].event.image}
                                   title={this.props.slider3[0].event.title}
                                   content={this.props.slider3[0].event.description}
                                   data={this.props.slider3[0].event.created_ad}
                                   id={this.props.slider3[0].event.id}/>
                           </Slider>
                       </div>
                   </div>

               </div>
           </div></>
        );
    }


}

let mapStateToProps = (state) => ({
    slider1: state.slider.slider1,
    slider2: state.slider.slider2,
    slider3: state.slider.slider3
})

export default connect(mapStateToProps, {setSlider1, setSlider2, setSlider3})(SimpleSliderContainer)
