import React from "react";
import Header from "../Header/Header";
import parse from  'html-react-parser'
import moment from "moment";
import 'moment/locale/ru';
const ProjectDetail = (props)=>{
    moment.locale('ru');
    return(<div>
        <Header color ="light"/>
            <div  className="post-header">
                <picture  className="post-header__background lazyLoad isLoaded">
                    <img data-v-53268a78="" className="lazyLoad isLoaded"
                         src={props.projectDetail.image}/>
                </picture>
                <div  className="post-header-content">
                    <div  className="container container--content">
                        <div  className="post-header-content__wrapper">
                            <div  className="post-header__filler"></div>
                            <div  className="post-header-info"><a  href="/means" className="post-header-info__category">{props.projectDetail.type}</a>
                                <div  className="post-header-info__data"><span className="post-header-info__data-date"></span>
                                </div>
                            </div>
                            <div  className="post-header-title"><h1 className="post-header-title__main text--cut">{props.projectDetail.title}</h1>
                                <h2  className="post-header-title__sub text--cut">{props.projectDetail.description}
                                </h2>
                            </div>
                            <div  className="post-header-controls">
                                <div  className="post-header-controls__meta"><span ></span>
                                </div>
                                <div  className="post-header-controls__comments">

                                    <span  data-comment-counter="34020"
                                           className="post-header-controls__comments-count"></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div  className="post post--with-reduced-header">

                <div data-v-55a4ade7="" className="container container--content-outer">
                    <div data-v-55a4ade7="" className="container container--content">

                        <div data-v-55a4ade7="" className="content__base">
                            {!props.projectDetail.content ? 'Загрузка...': parse(props.projectDetail.content)}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        )
}
export default ProjectDetail