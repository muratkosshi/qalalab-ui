import React from 'react';
import Slider from "react-slick";
import moment from "moment";
import 'moment/locale/ru'

const NavSlide=(props)=>{
    moment.locale('ru');
    return(


                    <div style={{width: "100%",display: "inline-block"}}>
                        <div className="nav-slide">
                            <div className="nav-slide__background lazyLoad isLoaded" style={{backgroundImage: `url(${props.img})`}}></div>
                            <div className="nav-slide__link"></div>
                            <div className="nav-slide-content">
                                <div className="nav-slide-info">
                                    <img className="nav-slide-info__cover lazyLoad isLoaded" src={props.img}/>
                                    <div className="nav-slide-info-right">
                                        <div className="nav-slide-info-right__category">
                                            {props.type}
                                        </div>
                                        <div className="nav-slide-info-right__title text--cut">
                                            {props.title}
                                        </div>
                                        <div className="nav-slide-info-right__meta">
                                            {props.data}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

    )
}

export default NavSlide;