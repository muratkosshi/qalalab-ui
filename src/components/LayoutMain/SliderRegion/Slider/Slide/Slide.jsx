import React from 'react';
import {NavLink} from "react-router-dom";
import moment from "moment";
import 'moment/locale/ru'

const Slide=(props)=>{

    moment.locale('ru');
    return(

            <div className="slider__item-img">
                <NavLink to={`${props.type}/${props.id}`}>
                <div className="slide">
                    <NavLink to={`/${props.type}/${props.id}`}>
                    <div
                        style={{backgroundImage: `url(${props.img})`}}
                        className="slide__background slide__background--desktop"
                        data-v-e4caeaf8 data-v-74622ff2></div></NavLink>
                    <div
                        style={{backgroundImage: `url(${props.imgMobile})`}}
                        className="slide__background slide__background--mobile"
                        data-v-e4caeaf8 data-v-74622ff2></div>
                    <div className="container"  >
                        <div className="slide-content"  >
                            <div className="slide-content-meta">
                                <div className="slide-content-meta__data"></div>
                            </div>
                            <NavLink to={`${props.type}/${props.id}`} className="slide-content__title text--cut">{props.title}</NavLink>
                            <div className="slide-content__excerpt text--cut">
                                <p>{props.content}</p>
                            </div>
                            <div className="slide-content-actions">
                                <NavLink  to={`${props.type}/${props.id}`} className="light slide-content-actions__action">Читать</NavLink>
                                <div className="slide-content-actions__date">{moment(props.data).fromNow()}</div>
                            </div>
                        </div>
                    </div>
                </div>
                </NavLink>
            </div>
    )
}

export default Slide;