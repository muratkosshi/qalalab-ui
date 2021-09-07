import React from 'react';
import Header from "../Header/Header";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = (props) =>{
    let state = props.projects
    return(<div>
        <Header color = "dark"></Header>
            <div className="news__container page" >
            <div className="container" >
                <div className="grid grid--reviews" >
                    <div className="heading-container" >
                        <div className="heading">
                            <a
                            aria-current="page"
                            className="heading__title nuxt-link-exact-active nuxt-link-active heading__title--readonly">Проекты</a><a
                             aria-current="page"
                            className="heading__action nuxt-link-exact-active nuxt-link-active"
                            data-v-8578b8a4=""></a></div>
                    </div>
                    {state.projects.map((p) => { return <ProjectCard
                        img = {p.image}
                        title={p.title}
                        description={p.description}
                        url = {p.url}
                        id = {p.id}/>})}
                </div>

            </div>

        </div>
            <div className="more more--next" >
                <button className="button">Загрузить ещё</button>
            </div>
    </div>
    )
}

export default Projects;