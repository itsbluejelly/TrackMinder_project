// IMPORTING NECESSARY MODULES
import React from "react"
import NavBar from "../components/NavBar"
import CollectionCell from "../components/CollectionCell"
import Footer from "../components/Footer"
import UserContextHook from '../hooks/UserContextHook'
import ErrorPopup from '../components/ErrorPopup'
import SuccessPopup from '../components/SuccessPopup'
import AuthenticationButton from '../components/AuthenticationButton'
import CollectionContextHook from "../hooks/CollectionContextHook"
import DataForm from "../components/DataForm"

import { formatDistanceToNow } from "date-fns"

// EXPORTING A COLLECTIONSPAGE FUNTION
export default function CollectionsPage(){
    //DEFINING A STATE BOOLEAN TO KEEP TRACK OF ERROR MESSAGES
    const [error, setError] = React.useState(false)
    //DEFINING A STATE BOOLEAN TO KEEP TRACK OF SUCCESS MESSAGES
    const [success, setSuccess] = React.useState(false)
    // DEFINING A STATE BOOLEAN TO ACTIVATE UPDATE FORM
    const [showUpdatedForm, setShowUpdatedForm] = React.useState(false)
    // DEFINING A STATE BOOLEAN TO ACTIVATE ADDING FORM
    const [showForm, setShowForm] = React.useState(false)
    // DEFINING A STATE BOOLEAN TO DISABLE FORM BUTTON
    const [disabled, setDisabled] = React.useState(false)
    // DEFINING A STATE TO KEEP TRACK OF COLLECTION TO UPDATE
    const [collectionID, setCollectionID] = React.useState('')
    
    //DEFINING A STATE TO KEEP TRACK OF FORM DATA
    const [formData, setFormData] = React.useState({
        name: "",
        description: ""
    }) 

    // OBTAINING THE GLOBAL USER AND DISPATCH FUNCTIONS
    const { user, dispatch } = UserContextHook()
    // OBTAINING THE GLOBAL COLLECTIONS AND DISPATCH FUNCTIONS
    const { collections, dispatch: collectionsDispatch } = CollectionContextHook()

    // A FUNCTION THAT FETCHES ALL THE COLLECTIONS
    async function getCollections(){
        try{
            const res = await fetch('https://rich-trousers-hare.cyclic.cloud/collections', {
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
            const res = await fetch(`https://rich-trousers-hare.cyclic.cloud/collections/collection/${id}`, {
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
            description: ""
        })

        try{
            const res = await fetch(`https://rich-trousers-hare.cyclic.cloud/collections/collection/${id}`, {
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
            description: ""
        })

        try{
            const res = await fetch("https://rich-trousers-hare.cyclic.cloud/collections", {
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
            const res = await fetch("https://rich-trousers-hare.cyclic.cloud/collections", {
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

    // A FUNCTION THAT GENERATES A LIST OF COLLECTIONCELLS
    function collectionsArrayGenerator(){
        return collections.map(collection => {
            const dateTime = `${formatDistanceToNow(new Date(collection.createdAt), { addSuffix: true })}`

            return (
                <CollectionCell
                    name = {collection.name}
                    createdDate = {`Created ${dateTime}`}
                    key={collection._id}
                    id={collection._id}
                    description={collection.description}
                    handleDelete={() => deleteCollection(collection._id)}
                    updateCollectionID={() => updateCollectionID(collection._id)}
                    disabled={disabled}
                />
            )
        })
    }

    // A USEEFFECT FUNCION THAT CALLS GETCOLLECTIONS
    React.useEffect(() => {getCollections()}, [])

    return(
        // A COLLECTIONS PAGE CONTAINER THAT HOLDS ALL NECESSARY COLLECTIONS
        <div 
            id="collections-page"
            className="min-h-screen bg-light-theme scroll-smooth dark:bg-dark-theme dark:text-dark-theme-text transition-all duration-500 relative"
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

            {/* A POPUP FORM IF THE UPDATE OR ADD BUTTON IS CLICKED */}
            {
                showUpdatedForm 
            ? 
                <DataForm
                    button = {<AuthenticationButton
                        innerText="Update"
                        handleClick={() => updateCollection(collectionID)}
                        disabled={disabled}
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
                />
            :
                    showForm
                ?
                    <DataForm
                    button = {<AuthenticationButton
                        innerText="Create"
                        handleClick={createCollection}
                        disabled={disabled}
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
                    />
                :
                    null
            }

            {/* A NAVBAR TO DIRECT TO THE HOME PAGE, OR THE USER PROFILE */}
            <NavBar
                navigationTitle = "TrackMinder"
                username = { user.username }
                url = "/welcome"
            />
            
            {/* A GRID OR FLEX CONTAINER FOR ALL COLLECTIONS */}
            <div className="lg:grid grid-flow-row lg:grid-cols-3 gap-2 flex flex-col justify-center items-center md:grid md:grid-cols-2">
                {collections && collectionsArrayGenerator() }
            </div>
            
            {/* A FOOTER TO EITHER DELETE ALL OR ADD A COLLECTION */}
            <Footer
                disabled={disabled}
                showForm={() => setShowForm(true)}
                handleDelete={deleteAllCollections}
                addTitle="Add Collection"
                deleteTitle="Delete Collections"
            />
            
        </div>
    )
}