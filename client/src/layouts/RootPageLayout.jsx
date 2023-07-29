// IMPORTING NECESSARY MODULES
import React from 'react'
import UserContextHook from '../hooks/UserContextHook'
import { Outlet, Navigate } from 'react-router-dom'

// RETURNING THE ROOTPAGELAYOUT
export default function RootPageLayout(){
    // OBTAINING THE USER AND DISPATCH GLOBAL VALUES
    const { user, dispatch } = UserContextHook()

    // A FUNCTION TO FETCH USER DATA
    function getUser(){
        dispatch({ type: "GET_USER" })
    }

    // A USEEFFECT TO CALL THE GETUSER FUNCTION
    React.useEffect(() => getUser(), [])

    if(!user){
        return <Navigate to="/home/collections"/>
    }else{
        <main>
           <Outlet/>
        </main>
    }
}