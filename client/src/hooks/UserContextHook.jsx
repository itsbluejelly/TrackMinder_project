// IMPORING NECESSARY MODULES AND CONTEXTS
import React from "react";
import { UserContext } from '../contexts/UserContext'

// EXPORTING A USERCONTEXTHOOK FUNCTION THAT MAKES THE USERCONTEXT AVAILABLE AFTER VALIDATON
export default function UserContextHook(){
    const context = React.useContext(UserContext)

    if(!context){
        throw new Error("The context you are looking for is not provided by UserContext")
    }

    return context
}