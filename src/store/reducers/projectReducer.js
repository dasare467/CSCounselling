const initState = {
   notuploaded: "5"
}

const projectReducer = (state = initState,action) => {
    switch (action.type) {
        case 'CREATE_PROJECT': 
        console.log('created project', action.project, state)
        return{
            ...state,
            notuploaded: "failed"
        } 
        
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return{
                ...state,
                notuploaded: null
            } 
        default:
            return state
    }
}


export default projectReducer