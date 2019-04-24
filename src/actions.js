import axios from 'axios'
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

axios.defaults.baseURL = 'http://localhost:4000'
export const Edit = () => (dispatch) => {
    dispatch({ type: ShowContact })

}
export const EditExp = () => (dispatch) => {
    dispatch({ type: Show })

}
export const EditEdu = () => (dispatch) => {
    dispatch({ type: ShowP2 })

}
export const EditBlog = () => (dispatch) => {
    dispatch({ type: ShowBlog })

}
export const EditDesign = () => (dispatch) => {
    dispatch({ type: ShowDesign })

}
export const EditCode = () => (dispatch) => {
    dispatch({ type: ShowCode })

}



//contact

export const  getcontact =  () => (dispatch) => {
    
    dispatch({ type: LOAD })
    axios.get('/contact')
        .then(res => dispatch({
            type: GET,
            payload:  res.data
        }))
        .catch(err => console.log(err))
}

export const addcontact = (nameInfo,value) => (dispatch) => {
    
    axios.post('/contact', {nameInfo,value})
        .then(res => {
            console.log(res.data)
            dispatch({ 
            type: ADD,
            payload: res.data
        })})
        .catch(error => console.log(error))
    
}

export const deletecontact = (contactId) => dispatch => {
    axios.post(`/contact/${contactId}`)
    .then(res => {
        console.log(res.data)
        dispatch({ 
        type: DELETE,
        payload: res.data.contactId
    })})
    .catch(error => console.log(error))
}

//blog
export const  getblog =  () => (dispatch) => {
    
    dispatch({ type: LOAD_BLOG })
    axios.get('/blog')
        .then(res => dispatch({
            type: GET_BLOG,
            payload:   res.data
        }))
        .catch(err => console.log(err))
}

export const addblog = (image,date,title,content) => (dispatch) => {
    
    axios.post('/blog', {image,date,title,content})
        .then(res => {
            console.log(res.data.infomation)
            dispatch({ 
            type: ADD_BLOG,
            payload: res.data
        })})
        .catch(error => console.log(error))
    
}

export const deleteblog = (blogID) => dispatch => {
    axios.post(`/blog/${blogID}`)
    .then(res => {
        console.log(res.data)
        dispatch({ 
        type: DELETE_BLOG,
        payload: res.data.blogID
    })})
    .catch(error => console.log(error))
}

//exp
export const  getexp =  () => (dispatch) => {
    
    dispatch({ type: LOAD_EXP })
    axios.get('/experience')
        .then(res => 
            dispatch({
            type: GET_EXP,
            payload:  res.data
        }))
        .catch(err => console.log(err))
}
export const addexp = (date,title,company,content) => (dispatch) => {
    
    axios.post('/experience', {date,title,company,content})
        .then(res => {
            console.log(res.data)
            dispatch({ 
            type: ADD_EXP,
            payload: res.data
        })})
        .catch(error => console.log(error))
    
}

export const deleteexp = (expID) => dispatch => {
    axios.post(`/experience/${expID}`)
    .then(res => {
        console.log(res.data)
        dispatch({ 
        type: DELETE_EXP,
        payload: res.data.expID
    })})
    .catch(error => console.log(error))
}

//education
export const  getedu =  () => (dispatch) => {
    
    dispatch({ type: LOAD_EDU })
    axios.get('/education')
        .then(res => dispatch({
            type: GET_EDU,
            payload:   res.data
        }))
        .catch(err => console.log(err))
}

export const addedu = (date,title,local,content) => (dispatch) => {
    
    axios.post('/education', {date,title,local,content})
        .then(res => {
            console.log(res.data)
            dispatch({ 
            type: ADD_EDU,
            payload: res.data
        })})
        .catch(error => console.log(error))
    
}

export const deleteedu = (eduID) => dispatch => {
    axios.post(`/education/${eduID}`)
    .then(res => {
        console.log(res.data)
        dispatch({ 
        type: DELETE_EDU,
        payload: res.data.eduID
    })})
    .catch(error => console.log(error))
}

//design
export const  getdesign =  () => (dispatch) => {
    
    dispatch({ type: LOAD_DESIGN })
    axios.get('/design')
        .then(res => dispatch({
            type: GET_DESIGN,
            payload:   res.data
        }))
        .catch(err => console.log(err))
}

export const adddesign = (skill,ratingDesign) => (dispatch) => {
    
    axios.post('/design', {skill,ratingDesign})
        .then(res => {
            console.log(res.data)
            dispatch({ 
            type: ADD_DESIGN,
            payload: res.data
        })})
        .catch(error => console.log(error))
    
}

export const deletedesign = (designID) => dispatch => {
    axios.post(`/design/${designID}`)
    .then(res => {
        console.log(res.data)
        dispatch({ 
        type: DELETE_DESIGN,
        payload: res.data.designID
    })})
    .catch(error => console.log(error))
}


// coding
export const  getcode =  () => (dispatch) => {
    
    dispatch({ type: LOAD_CODE })
    axios.get('/coding')
        .then(res => dispatch({
            type: GET_CODE,
            payload:   res.data
        }))
        .catch(err => console.log(err))
}

export const addcode = (skill,ratingCode) => (dispatch) => {
    
    axios.post('/coding', {skill,ratingCode})
        .then(res => {
            console.log(res.data)
            dispatch({ 
            type: ADD_CODE,
            payload: res.data
        })})
        .catch(error => console.log(error))
}

export const deletecode = (codeID) => dispatch => {
    axios.post(`/coding/${codeID}`)
    .then(res => {
        console.log(res.data)
        dispatch({ 
        type: DELETE_CODE,
        payload: res.data.codeID
    })})
    .catch(error => console.log(error))
}
