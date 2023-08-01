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
import TaskCell from "../components/TaskCell"

import { useParams } from 'react-router-dom'
import { format } from "date-fns"

// EXPORTING THE COLLECTION PAGE FUNCTION
export default function TasksPage(){
    // A STATE TO DETERMINE APPEARANCE OF ERROR POPUP
    const [error, setError] = React.useState('')
    // A STATE TO DETERMINE APPEARANCE OF SUCCESS POPUP
    const [success, setSuccess] = React.useState('')
    // A STATE TO MANAGE TASKS
    const [tasks, setTasks] = React.useState([])
    // A BOOLEAN TO DETERMINE WHETHER A FORM RELAYS UPDATE INFO
    const [showUpdateForm, setShowUpdateForm] = React.useState(false)
    // A BOOLEAN TO DETERMINE WHETHER A FORM RELAYS POST INFO
    const [showForm, setShowForm] = React.useState(false)
    // A BOOLEAN TO DETERMINE IF A BUTTON IS DISABLED
    const [disabled, setDisabled] = React.useState(false)
    // OBTAINING GLOBAL USER AND DISPATCH FUNCTIONS
    const { user, dispatch } = UserContextHook()
    // OBTAINING GLOBAL COLLECTIONS AND DISPATCH FUNCTION
    const { collections, dispatch: collectionsDispatch } = CollectionContextHook()
    // OBTAINING OF COLLECTION_ID
    const { id: collectionID } = useParams()

    // A FUNCTION THAT OBTAINS COLLECTION NAME
    function getCollectionName(){
        const visitedCollection = collections.filter(collection => collection._id === collectionID)

        return visitedCollection[0].name
    }

    // A FUNCTION THAT FETCHES ALL RELEVANT TASKS FROM API
    async function getTasks(){
        try{
            const res = await fetch(`http://localhost:4000/tasks/?collection=${collectionID}`, {
                method: "GET",
                headers: {'Authorization': `Bearer ${user.token}`}
            })

            const response = await res.json()

            if(!res.ok){
                setSuccess('')
                setError(response.error)
            }else{
                setError('')
                setSuccess(response.success)
                setTasks(response.data)
            }
        }catch(error){
            setSuccess('')
            setError(error.message)
        }
    }

    // A FUNCTION THAT DELETES A TASK
    async function deleteTask(id){
        try{
            const res = await fetch(`http://localhost:4000/tasks/task/${id}`, {
                method: "DELETE",
                headers: { "Authorization": `Bearer ${user.token}` }
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
        }
    }

    // A FUNCTION THAT CONVERTS FETCHED TASKS OBJECTS TO TASKS COMPONENTS
    function generateTasksArray(){
        return tasks.map(task => {
            const deadline = 
                task.deadline ? `${format(new Date(task.deadline), "do 'of' MMMM yyyy\thh:mm:ss aaaa")}` : "" 
            const dateTime = `${format(new Date(task.updatedAt), "do 'of' MMMM yyyy\thh:mm:ss aaaa")}`
            
            const [deadlineDate, deadlineTime] = deadline.split('\t')
            const [updatedDate, updatedTime] = dateTime.split('\t')
            
            return (
                <TaskCell
                    activity={task.activity}
                    deadlineDate={deadlineDate}    
                    updatedDate={updatedDate}    
                    updatedTime={updatedTime}    
                    deadlineTime={deadlineTime}
                    disabled={disabled}
                    handleDelete = {() => deleteTask(task._id)}
                    key={task._id}
                    id={task._id}    
                />
            )
        })
    }

    // A USEEFFECT HANDLER THAT CALLS GETTASKS ONCE AFTER PAGE LOADS
    React.useEffect(() => {getTasks()}, [])

    return (
        //A TASKS-PAGE CONTAINER MASKING ALL ELEMENTS 
        <div 
            id="tasks-container"
            className="min-h-screen bg-light-theme scroll-smooth dark:bg-dark-theme dark:text-dark-theme-text transition-all duration-500 relative">
            {/* AN ERROR POPUP IF AN ERROR OCCURS */}
            {error && <ErrorPopup
                errorMessage = {error}
                handleClick = {() => setError('')}
            />}

            {/* A SUCCESS POPUP IF A SUCCESS OCCURS */}
            {success && <SuccessPopup
                successMessage = {success}
                handleClick = {() => setSuccess('')}
            />}

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
                navigationTitle= {getCollectionName()}
                username = {user.username}
            />
        
            {/* A CONTAINER FOR ALL TASK CELLS */}
            <div className="flex flex-col justify-evenly items-center">
                {generateTasksArray()}
            </div>

            {/* A FOOTER CONTAINING ADD AND DELETE BUTTONS */}
            <Footer
                addTitle="Add Task"
                deleteTitle="Delete Task"
            />
        </div>
    )
}