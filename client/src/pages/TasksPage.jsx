// IMPORTING NECESSARY MODULES
import React from "react"
import ErrorPopup from "../components/ErrorPopup"
import SuccessPopup from "../components/SuccessPopup"
import DataForm from "../components/DataForm"
import AuthenticationButton from "../components/AuthenticationButton"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import UserContextHook from "../hooks/UserContextHook"
import CollectionContextHook from "../hooks/CollectionContextHook"
import { useParams } from 'react-router-dom'

// EXPORTING THE COLLECTION PAGE FUNCTION
export default function TasksPage(){
    // A STATE TO DETERMINE APPEARANCE OF ERROR POPUP
    const [error, setError] = React.useState('')
    // A STATE TO DETERMINE APPEARANCE OF SUCCESS POPUP
    const [success, setSuccess] = React.useState('')
    // A STATE TO MANAGE NAME OF COLLECTION VISITED
    const [collectionName, setCollectionName] = React.useState('')
    // A BOOLEAN TO DETERMINE WHETHER A FORM RELAYS UPDATE INFO
    const [showUpdateForm, setShowUpdateForm] = React.useState(false)
    // A BOOLEAN TO DETERMINE WHETHER A FORM RELAYS POST INFO
    const [showForm, setShowForm] = React.useState(false)
    // OBTAINING GLOBAL USER AND DISPATCH FUNCTIONS
    const { user, dispatch } = UserContextHook()
    // OBTAINING GLOBAL COLLECTIONS AND DISPATCH FUNCTION
    const { collections, dispatch: collectionsDispatch } = CollectionContextHook()

    // A FUNCTION THAT OBTAINS COLLECTION NAME
    function getCollectionName(){
        const { id } = useParams()
        const visitedCollection = collections.filter(collection => collection._id === id)
        
        console.log(visitedCollection)
        return visitedCollection[0].name
    }

    return (
        //A TASKS-PAGE CONTAINER MASKING ALL ELEMENTS 
        <div 
            id="tasks-container"
            className="min-h-screen bg-light-theme scroll-smooth dark:bg-dark-theme dark:text-dark-theme-text transition-all duration-500 relative"
        >
            {/* AN ERROR POPUP IF AN ERROR OCCURS */}
            {error && <ErrorPopup/>}

            {/* A SUCCESS POPUP IF A SUCCESS OCCURS */}
            {success && <SuccessPopup/>}

            {/* A POPUP FORM IF EITHER CREATE OR UPDATE BUTTON IS CLICKED */}
            {
                    showForm
                ?
                    <DataForm/>
                :
                        showUpdateForm
                    ?
                        <DataForm/>
                    :
                        null
            }

            {/* A NAVBAR TO DIRECT TO COLLECTIONS PAGE OR USER PROFILE */}
            <NavBar
                url='/home/collections'
                navigationTitle= {`${getCollectionName()}`}
                username = {user.username}
            />

            {/* A FOOTER CONTAINING ADD AND DELETE BUTTONS */}
            <Footer
                
            />
        </div>
    )
}