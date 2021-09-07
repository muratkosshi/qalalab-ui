const SET_SLIDER1 = 'SET_SLIDER1'
const SET_SLIDER2 = 'SET_SLIDER2'
const SET_SLIDER3 = 'SET_SLIDER3'
let initialState ={
    slider1:
       [ {
            "project": {
                "id": 1,
                "title": "Загрузка...",
                "description": "",
                "content": "",
                "created_at": "",
                "updated_at": "",
                "url": "",
                "image": ""
            }
        }],
    slider2:
    [{
        "news": {
            "id": 1,
            "title": "Загрузка...",
            "description": "",
            "content": "",
            "created_at": "",
            "updated_at": "",
            "url": "",
            "image": ""
        }
    }]
,
    slider3:
        [{
            "event": {
                "id": 1,
                "title": "Загрузка...",
                "description": "",
                "content": "",
                "created_at": "",
                "updated_at": "",
                "url": "",
                "image": ""
            }
        }]

}


const sliderReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_SLIDER1:{
            return{...state, slider1: action.slider1}
        }
        case SET_SLIDER2:{
            return{...state, slider2: action.slider2}
        }
        case SET_SLIDER3:{
            return{...state, slider3: action.slider3}
        }
        default:{ return state }
    }
}


export const setSlider1 = (slider1) =>({type: SET_SLIDER1, slider1})
export const setSlider2 = (slider2) =>({type: SET_SLIDER2, slider2})
export const setSlider3 = (slider3) =>({type: SET_SLIDER3, slider3})

export default sliderReducer;