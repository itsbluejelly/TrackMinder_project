// IMPORING NECESSARY MODULES
import React from "react";

// CREATING A STYLECONTEXT THAT IS AVAILABLE TO ALL COMPONENTS
export const StyleContext = React.createContext()

// CREATING A STYLECONTEXTREDUCER FUNCTION THAT MANAGES THE STYLE STATE
export function StyleContextReducer(state, action){
    switch(action.type){
        case "DARK_MODE":
            return { darkMode: true }
        
        case "LIGHT_MODE":
            return { darkMode: false }

        default:
            return state
    }
}

// EXPORTING A STYLECONTEXTPROVIDER FUNCTION THAT MAKES THE STYLECONTEXT AVAILABLE TO ALL COMPONENTS
export default function StyleContextProvider({children}){
    const [state, dispatch] = React.useReducer(StyleContextReducer, { darkMode: false })

    return(
        <StyleContext.Provider value={{...state, dispatch}}>
            {children}
        </StyleContext.Provider>
    )
}