import React from 'react';
import logo from './../../img/logo2.svg'
import './../style.css'
const Footer =()=>{
    return(
        <div className="footer">

            <div className="socials" >
                <div className="container" >
                    <div className="links" >
                        <div className="links-logo" >
                            <div className="links-logo__text" ><img src={logo} alt=""/></div>
                            <div className="links-logo__subtext" >ГОРОДСКАЯ ЛАБОРАТОРИЯ. развиваем Актобе вместе!
                            </div>
                        </div>

                    </div>
                    <div className="socials-container" >
                        <div className="socials__text" >Подпишись, где тебе удобно, чтобы всегда быть в курсе событий;)
                        </div>
                        <div className="socials-right" >
                            <div className="socials-list">
                                <a href="https://www.instagram.com/qala.lab/" target="_blank"
                                   className="socials-list-item" >
                                <svg aria-hidden="true"
                                     focusable="false" data-prefix="fab" data-icon="instagram" role="img"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                     className="socials-list-item__icon svg-inline--fa fa-instagram fa-w-14"
                                      >
                                    <path fill="currentColor"
                                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                           ></path>
                                </svg>
                            </a><a  target="_blank"
                                   className="socials-list-item" >
                                <svg aria-hidden="true"
                                     focusable="false" data-prefix="fab" data-icon="telegram-plane"
                                     role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                     className="socials-list-item__icon svg-inline--fa fa-telegram-plane fa-w-14"
                                      >
                                    <path fill="currentColor"
                                          d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
                                           ></path>
                                </svg>
                            </a></div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container" >

            </div>
        </div>
    )
}

export default Footer;