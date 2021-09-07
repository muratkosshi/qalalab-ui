  import logo from './logo.svg';
import './App.css';
  import LayoutMain from "./components/LayoutMain/LayoutMain";
  import PageNews from "./components/PageNews/PageNews";
  import Projects from "./components/Projects/Projects";
  import Events from "./components/Events/Events";
  import Footer from "./components/Footer/Footer";
  import {Route} from "react-router-dom";
  import MobileNav from "./components/MobileNav/MobileNav";
  import ProjectsContainer from "./components/Projects/ProjectsCotainer";
  import React from "react";
  import NewsDetailContainer from "./components/NewsDetail/NewsDetailContainer";
  import ProjectDetail from "./components/ProjectDetail/ProjectDetail";
  import ProjectDetailContainer from "./components/ProjectDetail/ProjectDetailContainer";
  import EventsDetailContainer from "./components/EventsDetail/EventsDetailContainer";

function App() {
  return (
      <div>
        <div id="__nuxt">
          <div id="__layout">
            <div>
              <Route exact path='/' render={()=><LayoutMain/>}/>
              <Route exact path={"/news"} render={()=><PageNews/>}/>
              <Route exact path={"/news/:newsId"} render={()=><NewsDetailContainer/>}/>
              <Route exact path={"/projects"} render={()=><ProjectsContainer/>}/>
              <Route exact path={"/projects/:projectId"} render={()=><ProjectDetailContainer/>}/>
              <Route exact path={"/events"} render={()=><Events/>}/>
              <Route exact path={"/events/:eventId"} render={()=><EventsDetailContainer/>}/>
              <Footer/>
              <MobileNav/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
