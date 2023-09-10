// IMPORTING ALL NECESSARY MODULES
import React from "react";

// CREATE A TASKCONTEXT THAT IS AVAILABLE TO ALL COMPONENTS
export const TaskContext = React.createContext()

// CREATING A TASKCONTEXT REDUCER FUNCTION THAT MANAGES THE TASKS STATE
export function TaskContextReducer(state, action){
    switch(action.type){
        case "DELETE_TASK":
            const retainedTasks = state.tasks.filter(task => task._id !== action.payload._id)
            return { tasks: retainedTasks }
        
        case "UPDATE_TASK":
            const updatedTasksArray = []

            state.tasks.map(task => {
                if(task._id === action.payload._id){
                    updatedTasksArray.unshift(action.payload)
                }else{
                    updatedTasksArray.push(task)
                }
            })

            return { tasks: updatedTasksArray }

        case "ADD_TASK":
            return {tasks: [action.payload, ...state.tasks]}

        case "DELETE_ALL_TASKS":
            return { tasks: [] }

        case "GET_TASKS":
            return { tasks: action.payload }

        case "HIDE_ALL_TASKS":
            const hiddenTasksArray = state.tasks.map(
                task => {
                    return {...task, notHidden : false}
                })

            return { tasks: hiddenTasksArray }

        case "SHOW_ALL_TASKS":
            const shownTasksArray = state.tasks.map(
                task => {
                    return {...task, notHidden : true}
                })
                
            return { tasks: shownTasksArray }

        default:
            return state
        
    }
}

// EXPORTING A TASKCONTEXT PROVIDER THAT PROVIDES THE TASK CONTEXT TO ALL COMPONENTS
export default function TaskContextProvider({ children }){
    const [state, dispatch] = React.useReducer(TaskContextReducer, { tasks: [] })

    return(
        <TaskContext.Provider value={{...state, dispatch}}>
            { children }
        </TaskContext.Provider>
    )
}