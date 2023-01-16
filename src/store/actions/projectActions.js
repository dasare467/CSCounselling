import { getFirebase } from "react-redux-firebase"


export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('announcements').add({
            ...project, 
            authorFirstName: 'Esi',
            authorLastName: 'Sey',
            authorId: '1', 
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_ANNOUNCEMENT', project }) // Dispatch this action if resolved
        }).catch((err) => {
            dispatch({type: 'CREATE_ANNOUNCEMENT_ERROR', err}) // Dispatch this action if there's an error
        })
    }
} 