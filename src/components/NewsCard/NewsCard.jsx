import React from 'react';
import {Link, NavLink} from "react-router-dom";
import moment from "moment";
import 'moment/locale/ru'


const NewsCard =(props)=>{
    moment.locale('ru')
    return(
        <div className="news-card-container" >
            <div className="news-card" style={{backgroundImage: `url(${props.img})`}}>
                <NavLink to={`/news/${props.id}`} className="news-card__link" ></NavLink
                ><a className="news-card__category nuxt-link-exact-active nuxt-link-active">{props.type}</a>
                <div className="news-card__comments" >
                    <svg
                        aria-hidden="true" focusable="false" data-prefix="fa"
                        data-icon="comment-alt" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="news-card__comments-icon svg-inline--fa fa-comment-alt fa-w-16"
                    >
                        <path fill="currentColor"
                              d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"
                        ></path>
                    </svg>
                    <span data-disqus-identifier="20378" className="disqus-comment-count"
                    >0</span></div>
                <div className="content" >
                    <div className="content__backdrop" ></div>
                    <div className="content__wrapper" >
                        <div className="content-top" ></div>
                        <div className="content-text content-text--wo-category" >
                            <NavLink to={`/news/${props.id}`}
                                  className="content-text__title text--cut"
                        >{props.title}</NavLink>
                            <div className="content-text__excerpt text--cut" >
                                <p>{props.description}</p>
                            </div>
                        </div>
                        <div className="content-info" >
                            <div className="content-info__date" >{moment(props.created_ad).fromNow()}</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default NewsCard