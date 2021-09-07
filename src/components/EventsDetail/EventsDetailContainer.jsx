import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import EventsDetail from "./EventsDetail";
import {setEventDetail} from "../../redux/events-reducer";

class EventsDetailContainer extends React.Component{
    componentDidMount() {
        let eventId = this.props.match.params.eventId;
        axios.get(`http://127.0.0.1:8000/api/v1/events/${eventId}`)
            .then(response => {
                this.props.setEventDetail(response.data);
            });
    }

    render() {
        return (
            <>
                <EventsDetail {...this.props} eventDetail={this.props.eventDetail}/>
            </>
        )
    }
}

let mapStateToProps= (state) =>({
    eventDetail: state.eventsPage.eventDetail
})

let withUrlDataContainerComponent = withRouter(EventsDetailContainer)
export default connect(mapStateToProps,{setEventDetail})(withUrlDataContainerComponent);