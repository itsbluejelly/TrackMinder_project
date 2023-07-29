// IMPORTING NECESSARY MODULES
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

// RETURNING THE ROOTPAGELAYOUT
export default function RootPageLayout(){
    //A STATE VARIABLE TO KEEP TRACK OF THE USER
    const [user, setUser] = React.useState(null) 

    // A FUNCTION TO FETCH USER DATA
    function getUser(){
        const foundUser = JSON.parse(localStorage.getItem("user"))
        setUser(foundUser)
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