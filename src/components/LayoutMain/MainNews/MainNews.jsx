import React from 'react';
import exlusive from '../../../img/news/exlusive.jpg'
import './../../style.css'
const MainNews = () =>{
    return(<div className="exclusive exclusive"  data-v-0cf95ae8>
        <div className="exclusive-background" >
            <div
                style={{backgroundImage: `url(${exlusive})`}}
                className="exclusive-background__container" >
                <img src={exlusive} alt=""/>
            </div>
        </div>
        <div className="container" >
            <div className="exclusive__container" >
                <div className="exclusive-info" >
                    <div className="exclusive-info-top" ><a
                        href="/posts/19845-korotkaya-istoriya-ritm-n-bljuza"
                        className="exclusive-info-top__title" >Главная новость</a>

                    </div>
                    <div className="exclusive-info-middle" >
                        <div className="exclusive-info-middle__title" >МЫ НА КАРАНТИНЕ!
                        </div>
                        <div className="exclusive-info-middle__description" >
                            <p>В связи с пандемией Covid-19
                                и переходом на желтую зону, мы будем проводить все мероприятия в формате онлайн до улучшения эпидемилогической ситуации в городе Актобе</p>
                        </div>
                    </div>
                    <div className="exclusive-info-bottom" ><a
                        href="/posts/19845-korotkaya-istoriya-ritm-n-bljuza"
                        className="exclusive-info-bottom__action" >Читать</a>
                        <div className="exclusive-info-bottom__date" >2 дня назад</div>
                    </div>
                </div>
                <div className="exclusive-cover" >
                    <div
                        lazy-background=""
                        style={{backgroundImage: `url(${exlusive})`}}
                        className="exclusive-cover__photo" ></div>
                </div>
            </div>
        </div>
    </div>)
}

export default MainNews;