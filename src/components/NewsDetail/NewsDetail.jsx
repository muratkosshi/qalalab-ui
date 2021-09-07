import React from "react";
import Header from "../Header/Header";
import parse from  'html-react-parser'
import moment from "moment";
import 'moment/locale/ru'
const NewsDetail = (props)=>{
    moment.locale('ru');
    return(<div>
        <Header/>
        <div  className="post post--with-reduced-header   ">
            <div className="post-header post-header--reduced" data-v-55a4ade7="">
                <div data-v-55a4ade7="" className="post-header__background post-header__background--desktop" style={{backgroundImage: `url(${props.newsDetail.image})`}}></div>
                <div className="post-header__background post-header__background--mobile" style={{backgroundImage: `url(${props.newsDetail.image})`}}></div>
                <div  className="post-header-content post-header-content--blurred">
                    <div  className="container container--content">
                        <div  className="post-header-content__wrapper">
                            <div  className="post-header__filler"></div>
                            <div  className="post-header-info">новости<a data-v-55a4ade7="" href="/means" className="post-header-info__category"></a>
                                <div  className="post-header-info__data"><span className="post-header-info__data-date">{moment(props.newsDetail.created_at).fromNow()}</span></div>
                            </div>
                            <div data-v-55a4ade7="" className="post-header-title">
                                <div data-v-55a4ade7="" className="post-header-title__main text--cut">
                                    {props.newsDetail.title}</div>
                                <div data-v-55a4ade7="" className="post-header-title__sub text--cut"><p></p>
                                </div>
                            </div>
                            <div data-v-55a4ade7="" className="post-header-controls">
                                <div data-v-55a4ade7="" className="post-header-controls__meta">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-v-55a4ade7="" className="container container--content-outer">
                <div data-v-55a4ade7="" className="container container--content">

                    <div data-v-55a4ade7="" className="content__base">
                       {parse (props.newsDetail.content)}
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default NewsDetail