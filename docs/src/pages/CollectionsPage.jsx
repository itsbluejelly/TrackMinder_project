// IMPORTING NECESSARY MODULES
import React from "react"
import NavBar from "../components/NavBar"
import CollectionCell from "../components/CollectionCell"
import Footer from "../components/Footer"
import UserContextHook from '../hooks/UserContextHook'
import ErrorPopup from '../components/ErrorPopup'
import SuccessPopup from '../components/SuccessPopup'
import GeneralPopup from "../components/GeneralPopup"
import AuthenticationButton from '../components/AuthenticationButton'
import CollectionContextHook from "../hooks/CollectionContextHook"
import DataForm from "../components/DataForm"
import StyleContextHook from "../hooks/StyleContextHook"
import ShowFooterContextHook from "../hooks/ShowFooterContextHook"

import { formatDistanceToNow } from "date-fns"

// EXPORTING A COLLECTIONSPAGE FUNTION
export default function CollectionsPage(){
    //DEFINING A STATE BOOLEAN TO KEEP TRACK OF ERROR MESSAGES
    const [error, setError] = React.useState(false)
    //DEFINING A STATE BOOLEAN TO KEEP TRACK OF SUCCESS MESSAGES
    const [success, setSuccess] = React.useState(false)
    // DEFINING A STATE BOOLEAN TO KEEP TRACK OF GENERAL POPUPS
    const [popup, setPopup] = React.useState(false)
    // DEFINING A STATE BOOLEAN TO ACTIVATE UPDATE FORM
    const [showUpdatedForm, setShowUpdatedForm] = React.useState(false)
    // DEFINING A STATE BOOLEAN TO ACTIVATE ADDING FORM
    const [showForm, setShowForm] = React.useState(false)
    // DEFINING A STATE BOOLEAN TO DISABLE FORM BUTTON
    const [disabled, setDisabled] = React.useState(false)
    // DEFINING A STATE TO KEEP TRCK OF COLLECTIONID
    const [collectionID, setCollectionID] = React.useState("")

    //DEFINING A STATE TO KEEP TRACK OF FORM DATA
    const [formData, setFormData] = React.useState({
        name: "",
        description: "",
        notHidden: true
    }) 

    // OBTAINING THE GLOBAL USER AND DISPATCH FUNCTIONS
    const { user, dispatch } = UserContextHook()
    // OBTAINING THE GLOBAL COLLECTIONS AND DISPATCH FUNCTIONS
    const { collections, dispatch: collectionsDispatch } = CollectionContextHook()
    // OBTAINING THE GLOBAL DARKMODE AND DISPATCH FUNCTIONS
    const {darkMode, dispatch:styleDispatch} = StyleContextHook()
    // OBTAINING THE GLOBAL SHOWFOOTER CONTEXT AND DISPATCH FUNCTION
    const { showFooter, dispatch:showFooterDispatch } = ShowFooterContextHook()

    // DEFINING A STATE BOOLEAN TO KEEP TRACK OF HIDDEN COLLECTIONS
    const [allNotHidden, setAllNotHidden] = React.useState(
        () => {collections.map(collection => {
            if(collection.notHidden){
                return true
            }else{
                return false
            }
        })}
    )

    // AN OBJECT OF STYLE PROPERTIES
    const styles = {
        collectionCell: {
            dark: {
                cellContainer: { boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.25)" },

                nameSection: {
                    backgroundColor: "rgba(255, 255, 255, 0.87)",
                    color: "black"
                },

                updatedDate: { backgroundColor: "silver" },
                extraInfoSection: { backgroundColor: "#8687E7" },

                button: {
                   boxShadow: "-2px 5px 15px black",
                   borderColor: "white" 
                }
            },

            light: {
                cellContainer: { boxShadow: "-2px 5px 15px black" },
                updatedDate: { backgroundColor: "gold" },
                extraInfoSection: { backgroundColor: "#F4C27F" },
                
                button: {
                    boxShadow: "2px 2px 10px black",
                    borderColor: "black" 
                }
            }
        },

        collectionsPage: {
            dark: {
                backgroundColor: "#121212",
                color: "rgba(255, 255, 255, 0.87)"
            },

            light: { backgroundColor: "rgba(244, 194, 127, 0.67)" }
        },
        
        dataForm: {
            dark: {
                updateFormContainer: { backgroundColor: "rgb(0, 0, 0, 0.6)" },
                
                updateForm: {
                    backgroundColor: "#363636",
                    boxShadow: "0px 0px 50px black"
                },
                
                input: {
                    borderRadius: "4px",
                    borderColor: "#979797",
                    backgroundColor: "#1D1D1D",
                    color: "#535353"
                }
            },

            light: {
                updateFormContainer: { backgroundColor: "rgb(255, 255, 255, 0.3)" },
                
                updateForm: {
                    backgroundColor: "rgb(254 215 170 / 1)",
                    boxShadow: "-2px 5px 15px black"
                },
                
                input: {
                    borderRadius: "22px"
                }
            }
        },

        authenticationButton: {
            dark: {
                backgroundImage: "linear-gradient(218deg, #8875FF 0%, rgba(134, 135, 231, 0.50) 100%)",
                borderRadius: "5px"
            },

            light: {
                backgroundImage: "linear-gradient(218deg, #D8605B 0%, #F4C27F 100%)",
                borderRadius: "50px",
                boxShadow: "0px 6px 10px 0px rgba(0, 0, 0, 0.15)"
            }
        },

        navBar: {
            dark: {
                navbarHeader: {
                    backgroundColor: "#8687E7",
                    boxShadow: "10px 5px 10px black"
                },

                userProfileLink: { backgroundColor: "white" },
                footerShowerBorder: { backgroundColor: "grey" },
                footerShower: { backgroundColor: "white" }
            },

            light: {
                navbarHeader: {
                    backgroundColor: "white",
                    boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.25)"
                },
                
                userProfileLink: { backgroundColor: "rgba(244, 194, 127, 0.67)" },
                footerShowerBorder: { backgroundColor: "white" },
                footerShower: { backgroundColor: "rgba(244, 194, 127, 0.67)" }
            }
        },

        footer: {
            dark: {footerContainer: {
                backgroundColor: "#363636",
                boxShadow: "10px 5px 10px black",
                color: "white"
            }},

            light: {footerContainer: {
               backgroundColor: "rgb(251 146 60 / 1)",
               boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.25)" 
            }}
        }
    }
    
    // A FUNCTION THAT FETCHES ALL THE COLLECTIONS
    async function getCollections(){
        try{
            const res = await fetch('http://localhost:3000/collections', {
                headers: {'Authorization':  `Bearer ${user.token}`},
                method: 'GET'
            })

            const response = await res.json()

            if(!res.ok){
                setSuccess('')
                setError(response.error)
            }else{
                setError('')
                setSuccess(response.success)
                
                collectionsDispatch({
                    type: "GET_COLLECTIONS",
                    payload: response.data
                })
            }
        }catch(error){
            setSuccess('')
            setError(error.message)
        }
    }
    
    // A FUNCTION THAT DELETES A SINGLE COLLECTION
    async function deleteCollection(id){
        try{
            const res = await fetch(`http://localhost:3000/collections/collection/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${user.token}` }
            })

            const response = await res.json()
            setDisabled(true)

            if(!res.ok){
                setSuccess('')
                
                setError(
                        response.error === "Consider signing up or logging in" 
                    ? 
                        "Cannot re-delete a collection" 
                    : 
                        response.error
                )

                setDisabled(false)
            }else{
                setError('')
                setSuccess(response.success)
                setDisabled(false)

                collectionsDispatch({
                    type: "DELETE_COLLECTION",
                    payload: response.data
                })
            }
        }catch(error){
            setSuccess('')
            
            setError(
                    error.message === "Consider signing up or logging in" 
                ? 
                    "Cannot re-delete a collection" 
                : 
                    error.message
            )

            setDisabled(false)
        }
    }

    // A FUNCTION TO UPDATE FORM DATA
    function updateFormData(e){
        const { name, value } = e.target

        setFormData(prevFormData => ({
            ...prevFormData,
            [name] : value
        }))
    }

    // A FUNCTION THAT PARSES THROUGH FORM DATA
    function validateForm(){
        const { name, description } = formData

        if(!name && !description){
            return null
        }else if(!name && description){
            return {description}
        }else if(!description && name){
            return {name}
        }else{
            return formData
        }
    }

    // A FUNCTION THAT UPDATES THE COLLECTION ID
    function updateCollectionID(id){
        setCollectionID(id)
        setShowUpdatedForm(true)
        setDisabled(false)
    }

    // A FUNCTION THAT UPDATES A SINGLE COLLECTION
    async function updateCollection(id){
        if(!validateForm()){
            return
        }

        setFormData({
            name: "",
            description: "",
            notHidden: true
        })

        try{
            const res = await fetch(`http://localhost:3000/collections/collection/${id}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(validateForm())
            })
            const response = await res.json()
            setDisabled(true)

            if(!res.ok){
                setSuccess('')
                setError(response.error)
                setDisabled(false)
            }else{
                setError('')
                setSuccess(response.success)

                collectionsDispatch({
                    type: "UPDATE_COLLECTION",
                    payload: response.data
                })

                setDisabled(false)
            }
        }catch(error){
            setSuccess('')
            setError(error.message)
            setDisabled(false)
        }
    }

    // A FUNCTION THAT CREATES A SINGLE COLLECTION
    async function createCollection(){
        setFormData({
            name: "",
            description: "",
            notHidden: true
        })

        try{
            const res = await fetch("http://localhost:3000/collections", {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(formData)
            })

            const response = await res.json()
            setDisabled(true)

            if(!res.ok){
                setSuccess('')
                setError(response.error)
                setDisabled(false)
            }else{
                setError('')
                setSuccess(response.success)
                setDisabled(false)

                collectionsDispatch({
                    type: "ADD_COLLECTION",
                    payload: response.data
                })
            }
        }catch(error){
            setSuccess('')
            setError(error.message)
            setDisabled(false)
        }
    }

    // A FUNCTION THAT DELETES ALL COLLECTIONS
    async function deleteAllCollections(){
        try{
            const res = await fetch("http://localhost:3000/collections", {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${user.token}` }
            })

            const response = await res.json()
            setDisabled(true)

            if(!res.ok){
                setSuccess('')
                
                setError(
                        response.error === "Consider signing up or logging in" 
                    ? 
                        "Cannot re-delete a collection" 
                    : 
                        response.error
                )

                setDisabled(false)
            }else{
                setError('')
                setSuccess(response.success)
                setDisabled(false)

                collectionsDispatch({ type: "DELETE_ALL_COLLECTIONS"})
            }
        }catch(error){
            setSuccess('')
            
            setError(
                    error.message === "Consider signing up or logging in" 
                ? 
                    "Cannot re-delete a collection" 
                : 
                    error.message
            )

            setDisabled(false)
        }
    }

    // A FUNCTION THAT HIDES ALL COLLECTIONS
    async function hideCollections(){
        setPopup("")
        
        try{
            const res = await fetch("http://localhost:3000/collections", {
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                    "Content-Type": "application/json"
                },

                method: 'PUT',
                body: JSON.stringify({ notHidden: false })
            })

            const response = await res.json()
            setDisabled(true)
            
            if(!res.ok){
                setSuccess('')
                setError(response.error)
                setDisabled(false)
            }else{
                setError('')
                setSuccess(response.success)
                setDisabled(false)
                setAllNotHidden(false)

                collectionsDispatch({ type: "HIDE_ALL_COLLECTIONS" })
            }
        }catch(error){
            setSuccess('')
            setError(error.message)
            setDisabled(false)
        }
    }

    // A FUNCTION THAT REVEALS ALL COLLECTIONS
    async function showCollections(){
        try{
            const res = await fetch('http://localhost:3000/collections', {
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                    'Content-Type': "application/json"
                },

                method: 'PUT',
                body: JSON.stringify({ notHidden: true })
            })

            const response = await res.json()
            setDisabled(true)

            if(!res.ok){
                setSuccess('')
                setError(response.error)
                setDisabled(false)
            }else{
                setError('')
                setSuccess(response.success)
                setDisabled(false)
                setAllNotHidden(true)

                collectionsDispatch({ type: "SHOW_ALL_COLLECTIONS" })
            }
        }catch(error){
            setSuccess('')
            setError(error.message)
            setDisabled(false)
        }
        
    }

    // A FUNCTION THAT GENERATES A LIST OF COLLECTIONCELLS
    function collectionsArrayGenerator(){
        return collections.map(collection => {
            const dateTime = `${formatDistanceToNow(new Date(collection.createdAt), { addSuffix: true })}`

            return (
                collection.notHidden 
                    ? 
                <CollectionCell
                    name = {collection.name}
                    createdDate = {`Created ${dateTime}`}
                    key={collection._id}
                    id={collection._id}
                    description={collection.description}
                    handleDelete={() => deleteCollection(collection._id)}
                    updateCollectionID={() => updateCollectionID(collection._id)}
                    disabled={disabled}
                    styles = {darkMode ? styles.collectionCell.dark : styles.collectionCell.light}
                /> 
                    :
                null 
            )
        })
    }

    // A USEEFFECT FUNCION THAT CALLS GETCOLLECTIONS
    React.useEffect(() => {getCollections()}, [])

    return(
        // A COLLECTIONS PAGE CONTAINER THAT HOLDS ALL NECESSARY COLLECTIONS AND IS A SPLIT SCREEN IN LARGE
        <div 
            id="collections-page"
            className="min-h-screen transition-all duration-500 relative scroll-smooth flex flex-col lg:flex-row-reverse"
            style={darkMode ? styles.collectionsPage.dark : styles.collectionsPage.light}
        >
            {/* AN ERROR POPUP IF AN ERROR OCCURS */}
            {error && <ErrorPopup
                    errorMessage = { error }
                    handleClick = {() => setError("")}
            />}

            {/* AN SUCCESS POPUP IF AN SUCCESS OCCURS */}
            {success && <SuccessPopup
                    successMessage = { success }
                    handleClick = {() => setSuccess("")}
            />}

            {/* A GENERAL POPUP IF THE A GENERAL POPUP OCCURS */}
            {popup && <GeneralPopup
                popupMessage = {popup}
                handleClose = {() => setPopup("")}
                handleClick = {() => hideCollections()}
            />}

            {/* A POPUP FORM IF THE UPDATE OR ADD BUTTON IS CLICKED */}
            {
                    showUpdatedForm 
                ? 
                    <DataForm
                        button = {<AuthenticationButton
                            innerText="Update"
                            handleClick={() => updateCollection(collectionID)}
                            disabled={disabled}
                            styles = {darkMode ? styles.authenticationButton.dark : styles.authenticationButton.light}
                        />}
                        hideForm = {() => setShowUpdatedForm(false)}
                        formData = {formData}
                        handleChange = {(e) => updateFormData(e)}
                        fieldTitle1 = "Name"
                        fieldPlaceholder1 = "Your collection name"
                        fieldType1 = "text"
                        fieldName1 = "name"
                        fieldTitle2 = "Description"
                        fieldPlaceholder2 = "Your optional description"
                        fieldType2 = "text"
                        fieldName2 = "description"
                        formTitle = "Update collection"
                        styles = {darkMode ? styles.dataForm.dark : styles.dataForm.light}
                    />
                :
                        showForm
                    ?
                        <DataForm
                        button = {<AuthenticationButton
                            innerText="Create"
                            handleClick={createCollection}
                            disabled={disabled}
                            styles = {darkMode ? styles.authenticationButton.dark : styles.authenticationButton.light}
                        />}
                            hideForm = {() => setShowForm(false)}
                            formData = {formData}
                            handleChange = {(e) => updateFormData(e)}
                            fieldTitle1 = "Name"
                            fieldPlaceholder1 = "Your collection name"
                            fieldType1 = "text"
                            fieldName1 = "name"
                            fieldTitle2 = "Description"
                            fieldPlaceholder2 = "Your optional description"
                            fieldType2 = "text"
                            fieldName2 = "description"
                            formTitle = "Create collection"
                            styles = {darkMode ? styles.dataForm.dark : styles.dataForm.light}
                        />
                    :
                        null
                }

            {/* A CONTAINER WHERE THE COLLECTIONS ARE VIEWED IN LARGE SCREENS */}
            <div className="flex flex-col lg:min-w-[90vw] flex-1">
                {/* A NAVBAR TO DIRECT TO THE HOME PAGE, OR THE USER PROFILE */}
                <NavBar
                    navigationTitle = "TrackMinder"
                    username = { user.username }
                    url = "/TrackMinder_project"
                    styles = {darkMode ? styles.navBar.dark : styles.navBar.light}
                    showFooterLogo = {showFooter ? "<-" : "->"}
                    
                    handleShowFooter = {
                        () => showFooter ? showFooterDispatch({ type: "HIDE_FOOTER" }) : showFooterDispatch({ type: "SHOW_FOOTER" })
                    }
                />
                
                {/* A GRID OR FLEX CONTAINER FOR ALL COLLECTIONS */}
                <div className="grid-flow-row lg:grid-cols-3 gap-2 flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap lg:flex-1">
                    {collections && collectionsArrayGenerator() }
                </div>
            </div>

            {/* A FOOTER TO EITHER DELETE ALL OR ADD A COLLECTION */}
            {showFooter && <Footer
                disabled={disabled}
                showForm={() => setShowForm(true)}
                handleDelete={deleteAllCollections}
                
                showPopup = {
                    allNotHidden 
                        ?
                    () => setPopup(
                        "Please note that this doesn't delete your collections, but rather hides them from view"
                    )
                        :
                    () => showCollections()  
                }
                
                addTitle="Add"
                deleteTitle="Delete"
                hideTitle = {allNotHidden ? "Hide All" : "Show All"}
                hideButton = {allNotHidden}
                styles = {darkMode ? styles.footer.dark : styles.footer.light}
            />}
        </div>
    )
}