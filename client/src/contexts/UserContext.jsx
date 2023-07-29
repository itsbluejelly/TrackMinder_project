// IMPORTING NECESSARY MODULES
import React from "react";

// CREATING A USERCONTEXT AVAILABLE TO EVERY COMPONENT
export const UserContext = React.createContext()

// A DISPATCH FUNCTION THAT DEALS WITH CHANGING THE STATE CONTEXT
export function UserContextReducer(state, action){
    switch(action.type){
        case "LOG_IN":
            localStorage.removeItem("user")
            localStorage.setItem("user", JSON.stringify(action.payload))

            return { user: action.payload }
        
        case "LOG_OUT":
            localStorage.removeItem("user")

            return { user: null }
            
        default:
            return state
    }
}

// EXPORTING A USERCONTEXTPROVIDER FUNCTION THAT PROVIDES ACCESS TO THE USERCONTEXT
export default function UserContextProvider({ children }){
    const [state, dispatch] = React.useReducer(UserContextReducer, { user: null })

    return(
        <UserContext.Provider value={{...state, dispatch}}>
            { children }
        </UserContext.Provider>
    )
}

