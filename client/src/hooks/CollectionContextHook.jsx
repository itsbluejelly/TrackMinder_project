// IMPORTING NECESSARY MODULES AND COMPONENTS
import React from "react";
import { CollectionContext } from '../contexts/CollectionContext'

// EXPORTING A COLLECTIONCONTEXTHOOK THAT ALLOWS ONE TO USE THE VALIDATED CONTEXTS
export default function CollectionContextHook(){
    const context = React.useContext(CollectionContext)

    if(!context){
        throw new Error("The context you are looking for is not provided by CollectionContext")
    }

    return context
}