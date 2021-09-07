const SET_NEWS = 'SET_NEWS'
const SET_NEWS_DETAIL = 'SET_NEWS_DETAIL'
let initialState ={
        news: [ ],
        newsDetail: {
            "id": 1,
            "title": "Загрузка...",
            "description": "",
            "content": "",
            "created_at": "",
            "updated_at": "",
            "url": "",
            "image": ""
        }
}

const newsReducer = (state = initialState, action) =>{
    // let stateCopy = {
    //         ...state,
    //     projects: [...state.projects]
    // }
    switch (action.type) {
        case SET_NEWS:{
            return{...state, news: action.news}
        }
        case SET_NEWS_DETAIL:{
            return {...state, newsDetail: action.newsDetail }
        }
        default:{ return state }
    }
}


export const setNews = (news) =>({type: SET_NEWS, news})
export const setNewsDetail = (newsDetail) =>({type:SET_NEWS_DETAIL, newsDetail})

export default newsReducer;