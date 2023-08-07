// IMPORTING NECESSARY MODULES AND CONTEXTS
import React from 'react'
import UserContextHook from '../hooks/UserContextHook'
import {Outlet, Navigate} from 'react-router-dom'

// EXPORTING DEFAULT USERLAYOUT FUNCTION
export default function UserLayout(){
    // OBTAINING GLOBAL USER AND DISPATCH FUNCTIONS
    const { user, dispatch } = UserContextHook()

    // A USEEFFECT FUNCTION TO FETCH USER ON FIRST RENDER
    React.useEffect(() => {dispatch({ type: "GET_USER" })}, [])

    // REDIRECT IF NO USER IS FOUND
    if(!user){
        return (
            <Navigate 
                to="/TrackMinder_project"
                replace={true}
            />
        )
    }

    return(
        <main>
            <Outlet/>
        </main>
    )
}