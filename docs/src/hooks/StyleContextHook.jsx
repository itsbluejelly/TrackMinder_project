// IMPORTING NECESSARY MODULES AND CONTEXTS
import React from "react";
import { StyleContext } from '../contexts/StyleContext'

// EXPORTING A STYLECONTEXTHOOK THAT MAKES THE VALIDATED STYLE CONTEXT ACCESSIBLE
export default function StyleContextHook(){
    const context = React.useContext(StyleContext)

    if(!context){
        throw new Error("The context you are looking for is not provided by StyleContext")
    }

    return context
}