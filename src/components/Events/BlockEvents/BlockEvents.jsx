import React from 'react';
import NewsCard from "../../NewsCard/NewsCard";
import event1 from '../../../img/events/events1.jpg'
import event2 from '../../../img/events/events2.jpg'
import event3 from '../../../img/events/events3.png'
import event4 from '../../../img/events/evets4.jpg'
import event5 from '../../../img/events/events5.jpg'
import event6 from '../../../img/events/events6.png'
import event7 from '../../../img/events/events7.png'
import event8 from '../../../img/events/events8.png'
import './../../style.css'
import Events from "../Events";
import EventsCard from "../../EventsCard/EventsCard";

const BlockEvents = (props) =>{
    let state = props.events
    return(
        <div className="interesting__container interesting">
        <div className="container">
            <div className="grid grid--interesting" >
                <div className="heading-container" >
                    <div className="heading heading--grid"  >Мероприятия<p className={"heading__title nuxt-link-exact-active nuxt-link-active heading__title--readonly"} data-v-8578b8a4>МЕРОПРИЯТИЯ</p></div>
                </div>

                {state.events.map((p) =>{return <EventsCard img={p.image}
                                                          title={p.title}
                                                          description={p.description}
                                                          url = {p.url}
                                                          id={p.id}/>})}






            </div>
            <div className="more more--next" >
                <button className="button">Загрузить ещё</button>
            </div>
        </div>
    </div>)
}

export default BlockEvents;