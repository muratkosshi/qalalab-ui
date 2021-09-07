import React from 'react';
import Header from "../Header/Header";
import BlockEventsContainer from "./BlockEvents/BlockEventsContainer";

const Events = () =>{
    return(
        <div>
            <Header color={"dark"}/>
            <div className="news__container page" >
                <BlockEventsContainer/>
            </div
            ></div>
       )
}

export default Events;