import React from 'react';
import NewsCard from "../../NewsCard/NewsCard";


const BlockNews = (props) => {
    let newsSwitch;
    let state = props.news
let headSwitch;
    if (props.header === "ON")
    {
        newsSwitch = "heading__title";
        headSwitch = "heading__action";
    }
    else if(props.header === "OFF")
    {
        headSwitch = "heading__action";
    }
    else
    {
        newsSwitch ="heading__title nuxt-link-exact-active nuxt-link-active heading__title--readonly"
        headSwitch = "off";
    }
    return(
        <div className="interesting__container interesting">
            <div className="container">
                <div className="grid grid--interesting" >
                    <div className="heading-container" >
                        <div className="heading heading--grid" data-v-8578b8a4 ><a href={"/news"}  data-v-8578b8a4>Новости</a>
                            <a href={"/news"}  data-v-8578b8a4>Все новости</a></div>
                    </div>
                    {state.news.map((p) =>{return <NewsCard img={p.image}
                                                            title={p.title}
                                                            description={p.description}
                                                            url = {p.url}
                                                            id={p.id}
                                                            created_ad={p.created_at}/>})}
                </div>
                <div className="more more--next" >
                    <button className="button">Загрузить ещё</button>
                </div>
            </div>
        </div>
    )
}

export default BlockNews;