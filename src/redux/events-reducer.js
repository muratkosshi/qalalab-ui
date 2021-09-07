const SET_EVENTS = 'SET_EVENTS'
const SET_EVENT_DETAIL = 'SET_EVENT_DETAIL'
let initialState ={
    events: [ ],
    eventDetail: {
        "id": 1,
        "title": "Загрузка...",
        "description": "",
        "content": "Загрузка...",
        "created_at": "",
        "updated_at": "",
        "url": "",
        "image": "",
        "place": "",
        "data": ""
    }
}

const eventsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_EVENTS:{
            return{...state, events: action.events}
        }
        case SET_EVENT_DETAIL:{
            return{...state, eventDetail: action.eventDetail}
        }
        default:{ return state }
    }
}


export const setEvents = (events) =>({type: SET_EVENTS, events})
export const setEventDetail = (eventDetail) =>({type: SET_EVENT_DETAIL, eventDetail})

export default eventsReducer;