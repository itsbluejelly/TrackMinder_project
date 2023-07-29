// IMPORTING NECESSARY MODULES
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserContextHook from "../hooks/UserContextHook";

// EXPORTING THE HOMELAYOUT PAGE
export default function HomeLayout(){
    // EXTRACTING THE USER AND DISPATCH GLOBALS
    const { user, dispatch } = UserContextHook()

    // A USEEFFECT USED TO FETCH USER THROUGH DISPATCH
    React.useEffect(() => {
        dispatch({ type: "GET_USER"})
    }, [])

    // REDIRECT IF USER FOUND
    if(!user){
        return <Navigate to='/welcome'/>
    }

    return(
        <main>
            <Outlet/>
        </main>
    )
}