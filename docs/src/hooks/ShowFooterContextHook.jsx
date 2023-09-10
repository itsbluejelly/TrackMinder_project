// IMPORTING NECESSARY MODULES AND CONTEXTS
import React from "react";
import { ShowFooterContext } from '../contexts/ShowFooterContext'

// A SHOWFOOTERCONTEXTHOOK THAT USES THE IMPORTED SHOWFOOTERCONTEXT AND MAKES IT AVAILABLE DEEP IN THE APP
export default function ShowFooterContextHook(){
    const context = React.useContext(ShowFooterContext)

    if(!context){
        throw new Error("The context you are looking for is not provided by ShowFooterContext")
    }

    return context
}