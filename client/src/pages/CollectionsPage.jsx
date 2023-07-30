// IMPORTING NECESSARY MODULES
import React from "react"
import NavBar from "../components/NavBar"
import CollectionCell from "../components/CollectionCell"
import Footer from "../components/Footer"
import UserContextHook from '../hooks/UserContextHook'
import ErrorPopup from '../components/ErrorPopup'
import SuccessPopup from '../components/SuccessPopup'
import AuthenticationButton from '../components/AuthenticationButton'
import DataForm from "../components/DataForm"
import { formatDistanceToNow } from "date-fns"


// EXPORTING A COLLECTIONSPAGE FUNTION
export default function CollectionsPage(){
    //DEFINING A STATE BOOLEAN TO KEEP TRACK OF ERROR MESSAGES
    const [error, setError] = React.useState(false)
    //DEFINING A STATE BOOLEAN TO KEEP TRACK OF SUCCESS MESSAGES
    const [success, setSuccess] = React.useState(false)
    // DEFINING A STATE BOOLEAN TO KEEP TRACK OF BUTTON STATE
    const [deleteOneDisabled, setDeleteOneDisabled] = React.useState(false)
    // DEFINING A STATE BOOLEAN TO ACTIVATE FORM
    const [showForm, setShowForm] = React.useState(false)
    // DEFINING A STATE TO KEEP TRACK OF THE COLLECTIONS
    const [collections, setCollections] = React.useState([])
    
    //DEFINING A STATE TO KEEP TRACK OF FORM DATA
    const [formData, setFormData] = React.useState({
        name: "",
        description: ""
    }) 

    // OBTAINING THE GLOBAL USER AND DISPATCH FUNCTIONS
    const { user, dispatch } = UserContextHook()

    // A FUNCTION THAT FETCHES ALL THE COLLECTIONS
    async function getCollections(){
        try{
            const res = await fetch('http://localhost:4000/collections', {
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
                setCollections(response.data)
            }
        }catch(error){
            setSuccess('')
            setError(error.message)
        }
    }
    
    // A FUNCTION THAT DELETES A SINGLE COLLECTION
    async function deleteCollection(id){
        try{
            const res = await fetch(`http://localhost:4000/collections/collection/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${user.token}` }
            })

            const response = await res.json()
            setDeleteOneDisabled(true)

            if(!res.ok){
                setSuccess('')
                setError(response.error)
                setDeleteOneDisabled(false)
            }else{
                setError('')
                setSuccess(response.success)
            }
        }catch(error){
            setSuccess('')
            setError(error.message)
        }
    }

    // A FUNCTION THAT UPDATES A SINGLE COLLECTION

    // A FUNCTION THAT GENERATES A LIST OF COLLECTIONCELLS
    function collectionsArrayGenerator(){
        return collections.map(collection => {
            const dateTime = `${formatDistanceToNow(new Date(collection.updatedAt), { addSuffix: true })}`

            return (
                <CollectionCell
                    name = {collection.name}
                    createdDate = {`Created ${dateTime}`}
                    key={collection._id}
                    id={collection._id}
                    description={collection.description}
                    handleDelete={() => deleteCollection(collection._id)}
                    deleteDisabled = {deleteOneDisabled}
                />
            )
        })
    }

    // A USEEFFECT FUNCTION THAT UPDATES THE NAVBAR TO THE USER'S USERNAME
    React.useEffect(() => {
        dispatch({ type: "GET_USER" })
    }, [])

    // A USEEFFECT FUNCION THAT CALLS GETCOLLECTIONS
    // React.useEffect(() => getCollections, [])

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

            {/* A POPUP FORM IF THE UPDATE BUTTON IS CLICKED */}
            {!showForm && <DataForm
                button = {<AuthenticationButton/>}
            />}

            {/* A NAVBAR TO DIRECT TO THE HOME PAGE, OR THE USER PROFILE */}
            <NavBar
                navigationTitle = "TrackMinder"
                username = { user.username }
                url = "/welcome"
            />
            
            {/* A GRID OR FLEX CONTAINER FOR ALL COLLECTIONS */}
            <div className="lg:grid grid-flow-row lg:grid-cols-3 gap-2 flex flex-col justify-center items-center md:grid md:grid-cols-2">
                { collectionsArrayGenerator() }
            </div>
            
            {/* A FOOTER TO EITHER DELETE ALL OR ADD A COLLECTION */}
            <Footer/>
            
        </div>
    )
}