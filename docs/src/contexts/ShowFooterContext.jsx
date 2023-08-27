// IMPORTING NECESSARY MODULES
import React from "react";

// EXPORTING A SHOWFOOTERCONTEXT THAT IS AVAILABLE THROUGHOUT THE APP VIA THE PROVIDER FUNCTION
export const ShowFooterContext = React.createContext()

// EXPORTING A SHOWFOOTERREDUCER FUNCTION THAT MANAGES THE SHOWFOOTERSTATE
export function ShowFooterReducer(state, action){
    switch(action.type){
        case "SHOW_FOOTER":
            return { showFooter: true }

        case "HIDE_FOOTER":
            return { showFooter: false }

        default:
            return state
    }
}

// EXPORTING A SHOWFOOTERPROVIDER FUNCTION THAT MAKES THE SHOWFOOTERCONTEXT AVAILABLE TO THE APP
export default function ShowFooterProvider({children}){
    const [state, dispatch] = React.useReducer(ShowFooterReducer, { showFooter: false })

    return(
        <ShowFooterContext.Provider value={{...state, dispatch}}>
            {children}
        </ShowFooterContext.Provider>
    )
}