// IMPORTING NECESSARY MODULES AND CONTEXTS
import React from "react";
import { TaskContext } from '../contexts/TaskContext'

// EXPORTING A TASKCONTEXTHOOK THAT MAKES TASKCONTEXT AVAILABLE AFTER VALIDATION
export default function TaskContextHook(){
    const context = React.useContext(TaskContext)

    if(!context){
        throw new Error("The context you are looking for is not provided by TaskContext")
    }

    return context
}