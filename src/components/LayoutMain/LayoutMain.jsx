import React from 'react';
import SimpleSlider from "./SliderRegion/Slider/SimpleSliderContainer";

import MainNews from "./MainNews/MainNews";
import Header from "../Header/Header";
import BlockNewsContainer from "../PageNews/BlockNews/BlockNewsContainer";




const LayoutMain = (props)=>{

    return(

        <div  className="main page page--main" >
            <Header color = "light"/>
            <SimpleSlider/>
            <BlockNewsContainer></BlockNewsContainer>
            <MainNews/>
            

        </div>

    )
}

export default LayoutMain