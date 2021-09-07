import {combineReducers, createStore} from "redux";
import projectsReducer from "./projects-reducer";
import newsReducer from "./news-reducer";
import eventsReducer from "./events-reducer";
import sliderReducer from "./slider-reducer";

let reducers = combineReducers({
    projectsPage: projectsReducer,
    newsPage: newsReducer,
    eventsPage: eventsReducer,
    slider: sliderReducer
})

let store = createStore(reducers)
window.store = store;
export default store;