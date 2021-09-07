import React from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import {setNews} from "../../../redux/news-reducer";
import BlockNews from "./BlockNews";

class BlockNewsContainer extends React.Component{
    componentDidMount () {
        axios.get(`http://127.0.0.1:8000/api/v1/news`)
            .then(response => {
                this.props.setNews(response.data)
            });
    }

    render() {
        return<><BlockNews news={this.props.news}/></>
    }
}
let mapStateToProps = (state)=>{
    return {
        news : state.newsPage,
    }
}


export default connect(mapStateToProps, {setNews})(BlockNewsContainer)
