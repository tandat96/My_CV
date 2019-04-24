import {
    Show,
    ShowP2,
    ShowDesign,
    ShowCode,
    ShowBlog,
    ShowContact,
    ADD,
    GET,
    LOAD,
    DELETE,
    ADD_EXP,
    GET_EXP,
    LOAD_EXP,
    DELETE_EXP,
    ADD_EDU,
    GET_EDU,
    LOAD_EDU,
    DELETE_EDU,
    ADD_BLOG,
    GET_BLOG,
    LOAD_BLOG,
    DELETE_BLOG,
    ADD_DESIGN,
    GET_DESIGN,
    LOAD_DESIGN,
    DELETE_DESIGN,
    ADD_CODE,
    GET_CODE,
    LOAD_CODE,
    DELETE_CODE,
    
} from './constants'


const MyCVInitialState = {
    Show:false,
    Show2:false,
    ShowDesign:false,
    ratingDesign: 1,
    ShowCode:false,
    ratingCode: 1,
    ShowBlog:false,
    ShowContact:false,
    loading: false,
    todos: [],
    toexps: [],
    toedus: [],
    toblogs: [],
    todesigns: [],
    tocodes: [],
}
export default function (state = MyCVInitialState, action) {
    switch (action.type){
        case Show:
            return {...state,Show:!state.Show}
        case ShowP2:
            return {...state,Show2:!state.Show2}
        case ShowDesign:
            return {...state,ShowDesign:!state.ShowDesign}
        case ShowCode:
            return {...state,ShowCode:!state.ShowCode}
        case ShowBlog:
            return {...state,ShowBlog:!state.ShowBlog}
        case ShowContact:
            return {...state,ShowContact:!state.ShowContact}
        case GET:
            return {
                ...state,
                loading: false,
                todos: action.payload
            }
        case ADD:
            return {
                ...state,
                todos: [ ...state.todos,action.payload],
            }
        case DELETE:console.log(action.payload)
            return {
                ...state, 
                todos: state.todos.filter(todo => todo._id !== action.payload),
            }
        case LOAD:
            return {
                ...state,
                loading: true,
                
            }
        case GET_EXP:
            return {
                ...state,
                loading: false,
                toexps: action.payload
            }
        case ADD_EXP:
            return {
                ...state,
                toexps: [ ...state.toexps,action.payload],
            }
        case DELETE_EXP:
            return {
                ...state, 
                toexps: state.toexps.filter(toexp => toexp._id !== action.payload) 
            }
        case LOAD_EXP:
            return {
                ...state,
                loading: true,
                
            }
        case GET_EDU:
            return {
                ...state,
                loading: false,
                toedus: action.payload
            }
        case ADD_EDU:
            return {
                ...state,
                toedus: [ ...state.toedus,action.payload],
            }
        case DELETE_EDU:
            return {
                ...state, 
                toedus: state.toedus.filter(toedu => toedu._id !== action.payload) 
            }
        case LOAD_EDU:
            return {
                ...state,
                loading: true,
                
            }
        case GET_BLOG:
            return {
                ...state,
                loading: false,
                toblogs: action.payload
            }
        case ADD_BLOG:
            return {
                ...state,
                toblogs: [ ...state.toblogs,action.payload],
            }
        case DELETE_BLOG:
            return {
                ...state, 
                toblogs: state.toblogs.filter(toblog => toblog._id !== action.payload) 
            }
        case LOAD_BLOG:
            return {
                ...state,
                loading: true,
                
            }
        case GET_DESIGN:
            return {
                ...state,
                loading: false,
                todesigns: action.payload
            }
        case ADD_DESIGN:
            return {
                ...state,
                todesigns: [ ...state.todesigns,action.payload],
            }
        case DELETE_DESIGN:
            return {
                ...state, 
                todesigns: state.todesigns.filter(todesign => todesign._id !== action.payload) 
            }
        case LOAD_DESIGN:
            return {
                ...state,
                loading: true,
                
            }
        case GET_CODE:
            return {
                ...state,
                loading: false,
                tocodes: action.payload
            }
        case ADD_CODE:
            return {
                ...state,
                tocodes: [ ...state.tocodes,action.payload],
            }
        case DELETE_CODE:
            return {
                ...state, 
                tocodes: state.tocodes.filter(tocode => tocode._id !== action.payload) 
            }
        case LOAD_CODE:
            return {
                ...state,
                loading: true,
                
            }
        default:
            return state 
    }
} 
