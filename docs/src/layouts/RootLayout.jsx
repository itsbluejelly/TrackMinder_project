// IMPORTING NECESSARY MODULES
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserContextHook from "../hooks/UserContextHook";

// EXPORTING THE ROOTLAYOUT PAGE
export default function RootLayout(){
    // EXTRACTING THE USER AND DISPATCH GLOBALS
    const { user, dispatch } = UserContextHook()

    // A USEEFFECT USED TO FETCH USER THROUGH DISPATCH
    React.useEffect(() => {
        dispatch({ type: "GET_USER"})
    }, [])

    // REDIRECT IF USER FOUND
    if(user){
        return <Navigate to='/home/collections' replace = {true}/>
    }

    return(
        <main>
            <Outlet/>
        </main>
    )
}