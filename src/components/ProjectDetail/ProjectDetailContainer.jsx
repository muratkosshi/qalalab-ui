import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import NewsDetail from "./ProjectDetail";
import {setProjectsDetail} from "../../redux/projects-reducer";
import Projects from "../Projects/Projects";
import ProjectDetail from "./ProjectDetail";
class ProjectDetailContainer extends React.Component{
    componentDidMount() {
        let projectId = this.props.match.params.projectId;
        axios.get(`http://127.0.0.1:8000/api/v1/projects/${projectId}`)
            .then(response => {
                this.props.setProjectsDetail(response.data);
            });
    }

    render() {
        return (
            <>
                <ProjectDetail {...this.props} projectDetail={this.props.projectDetail}/>
            </>
        )
    }
}

let mapStateToProps= (state) =>({
    projectDetail: state.projectsPage.projectDetail
})

let withUrlDataContainerComponent = withRouter(ProjectDetailContainer)
export default connect(mapStateToProps,{setProjectsDetail})(withUrlDataContainerComponent);