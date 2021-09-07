import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import NewsDetail from "./NewsDetail";
import {setNewsDetail} from "../../redux/news-reducer";

class NewsDetailContainer extends React.Component{
    componentDidMount() {
        let newsId = this.props.match.params.newsId;
        axios.get(`http://127.0.0.1:8000/api/v1/news/${newsId}`)
            .then(response => {
                this.props.setNewsDetail(response.data);
            });
    }

    render() {
        return (
            <>
                <NewsDetail {...this.props} newsDetail={this.props.newsDetail}/>
            </>
        )
    }
}

let mapStateToProps= (state) =>({
    newsDetail: state.newsPage.newsDetail
})

let withUrlDataContainerComponent = withRouter(NewsDetailContainer)
export default connect(mapStateToProps,{setNewsDetail})(withUrlDataContainerComponent);