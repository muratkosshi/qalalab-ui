const SET_PROJECTS = 'SET_PROJECTS'
const SET_PROJECTS_DETAIL = 'SET_PROJECTS_DETAIL'

let initialState = {
    projects: [],
    projectDetail:
        {
            "id": 1,
            "title": "Загрузка...",
            "description": "Закгрузка",
            "content": "",
            "created_at": "",
            "updated_at": "",
            "url": "",
            "name": "",
            "target": "",
            "image": ""
        },
    url: '',
}

const projectsReducer = (state = initialState, action) => {
    // let stateCopy = {
    //         ...state,
    //     projects: [...state.projects]
    // }
    switch (action.type) {
        case SET_PROJECTS: {
            return {...state, projects: action.projects}
        }
        case SET_PROJECTS_DETAIL: {
            return {...state, projectDetail: action.projectDetail}
        }
        default: {
            return state
        }
    }
}


export const setProjects = (projects) => ({type: SET_PROJECTS, projects})
export const setProjectsDetail = (projectDetail) => ({type: SET_PROJECTS_DETAIL, projectDetail})

export default projectsReducer;