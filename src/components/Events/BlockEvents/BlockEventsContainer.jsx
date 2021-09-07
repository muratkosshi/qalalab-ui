import React from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import BlockEvents from "./BlockEvents";
import {setEvents} from "../../../redux/events-reducer";

class BlockEventContainer extends React.Component{
    componentDidMount () {
        axios.get(`http://127.0.0.1:8000/api/v1/events`)
            .then(response => {
                this.props.setEvents(response.data)
            });
    }

    render() {
        return<><BlockEvents events={this.props.events}/></>
    }
}
let mapStateToProps = (state)=>{
    return {
        events: state.eventsPage,
    }
}


export default connect(mapStateToProps, {setEvents})(BlockEventContainer)
