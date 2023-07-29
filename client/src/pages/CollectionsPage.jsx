// IMPORTING NECESSARY MODULES
import React from "react"
import { Navigate } from "react-router-dom"
import UserContextHook from "../hooks/UserContextHook"

// EXPORTING A COLLECTIONSPAGE FUNTION
export default function CollectionsPage(){
    // OBTAINING THE GLOBAL USER STATE FROM THE USER CONTEXT HOOK
    const { user, dispatch } = UserContextHook()
    
    // A USEEFFECT FUNCTION THAT GETS THE CURRENT USER
    React.useEffect(() => {
        dispatch({type: "GET_USER"})
    }, [])

    // A CONDITION TO EXECUTE THE REDIRECT
    if(!user){
        return <Navigate to="/welcome"/>
    }

    return(
        <div 
            id="collections-page"
        >
            <p>+</p>
        </div>
    )
}