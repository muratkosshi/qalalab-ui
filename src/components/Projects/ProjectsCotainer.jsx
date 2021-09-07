import React from 'react';
import {connect} from "react-redux";
import Projects from "./Projects";
import * as axios from "axios";
import {setProjects} from "../../redux/projects-reducer";

class ProjectsContainer extends React.Component{
    componentDidMount () {
           axios.get(`http://127.0.0.1:8000/api/v1/projects`)
            .then(response => {
                this.props.setProjects(response.data)
            });
    }

    render() {
        return<><Projects projects={this.props.projects}/></>
    }
}
let mapStateToProps = (state)=>{
    return {
        projects : state.projectsPage,
    }
}

export default connect(mapStateToProps, {setProjects})(ProjectsContainer)
