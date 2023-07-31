// IMPORTING NECESSARY MODULES
import React from "react";

// CREATE A COLLECTION CONTEXT THAT IS AVAILABLE TO EVERY COMPONENT
export const CollectionContext = React.createContext()

// A COLLECTIONCONTEXT REDUCER FUNCTION THAT MANAGES DIFFERENT STATES OF THE COLLECTIONCONTEXT
export function CollectionContextReducer(state, action){
    switch(action.type){
        case "DELETE_COLLECTION":
            const retainedCollections = state.collections.filter(collection => collection._id !== action.payload._id)
            return { collections: retainedCollections }
        
        case "UPDATE_COLLECTION":
            const updatedCollectionsArray = []

            state.collections.map(collection => {
                if(collection._id === action.payload._id){
                    updatedCollectionsArray.unshift(action.payload)
                }else{
                    updatedCollectionsArray.push(collection)
                }
            })

            return { collections: updatedCollectionsArray }
        
        case "ADD_COLLECTION":
            return {collections: [action.payload, ...state.collections]}

        case "DELETE_ALL_COLLECTIONS":
            return { collections: null }

        case "GET_COLLECTIONS":
            return { collections: action.payload }

        default:
            return state
    }
}

// EXPORTING A COLLECTIONCONTEXTPROVIDER THAT PROVIDES THE COLLECTIONCONTEXT TO ALL COMPONENTS
export default function CollectionContextProvider({ children }){
    const [state, dispatch] = React.useReducer(CollectionContextReducer, { collections: null })

    return(
        <CollectionContext.Provider value={{...state, dispatch}}>
            { children }
        </CollectionContext.Provider>
    )
}