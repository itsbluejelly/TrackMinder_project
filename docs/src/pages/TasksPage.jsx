// IMPORTING NECESSARY MODULES
import React from "react"
import ErrorPopup from "../components/ErrorPopup"
import SuccessPopup from "../components/SuccessPopup"
import DataForm from "../components/DataForm"
import AuthenticationButton from "../components/AuthenticationButton"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import TaskCell from "../components/TaskCell"
import UserContextHook from "../hooks/UserContextHook"
import CollectionContextHook from "../hooks/CollectionContextHook"
import TaskContextHook from "../hooks/TaskContextHook"
import StyleContextHook from "../hooks/StyleContextHook"

import { useParams } from 'react-router-dom'
import { format } from "date-fns"

// EXPORTING THE COLLECTION PAGE FUNCTION
export default function TasksPage(){
    // A STATE TO DETERMINE APPEARANCE OF ERROR POPUP
    const [error, setError] = React.useState('')
    // A STATE TO DETERMINE APPEARANCE OF SUCCESS POPUP
    const [success, setSuccess] = React.useState('')
    // A STATE TO MANAGE TASK ID
    const [taskID, setTaskID] = React.useState('')
    
    // A STATE TO MANAGE FORM DATA
    const [formData, setFormData] = React.useState({
        activity: "",
        deadline: ""
    })

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
    // OBTAINING GLOBAL TASKS AND DISPATCH FUNCTION
    const { tasks, dispatch:tasksDispatch } = TaskContextHook()
    // OBTAINING OF COLLECTION_ID
    const {id:collectionID} = useParams()
    // OBTAINING GLOBAL DARKMODE AND DISPATCH FUNCTION
    const {darkMode, dispatch:styleDispatch} = StyleContextHook()

    // AN OBJECT OF STYLE PROPERTIES
    const styles = {
        taskCell: {
            dark: {
                taskContainer: { backgroundColor: "#8687E7" },
                
                button: {
                    boxShadow: "-2px 5px 15px black",
                    borderColor: "white"
                }
            },

            light: { 
               taskContainer: { backgroundColor: "rgb(253 186 116 / 1)" },
               
                button: {
                    boxShadow: "2px 2px 10px black",
                    borderColor: "black"
                }
            }
        },

        tasksContainer: {
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

                userProfileLink: { backgroundColor: "white" }
            },

            light: {
                navbarHeader: {
                    backgroundColor: "white",
                    boxShadow: "0px 4px 15px 0px rgba(0, 0, 0, 0.25)"
                },
                
                userProfileLink: { backgroundColor: "rgba(244, 194, 127, 0.67)" }
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

    // A FUNCTION THAT OBTAINS COLLECTION NAME
    function getCollectionName(){
        const visitedCollection = collections.filter(collection => collection._id === collectionID)

        return visitedCollection[0].name
    }

    // A FUNCTION THAT FETCHES ALL RELEVANT TASKS FROM API
    async function getTasks(){
        try{
            const res = await fetch(`https://trackminder-project.onrender.com/tasks/?collection=${collectionID}`, {
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
                
                tasksDispatch({
                    type: "GET_TASKS",
                    payload: response.data
                })
            }
        }catch(error){
            setSuccess('')
            setError(error.message)
        }
    }

    // A FUNCTION THAT DELETES A TASK
    async function deleteTask(id){
        try{
            const res = await fetch(`https://trackminder-project.onrender.com/tasks/task/${id}`, {
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

                tasksDispatch({
                    type: "DELETE_TASK",
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

    // A FUNCTION THAT REVEALS THE UPDATED FORM UPON CLICKING AND UPDATES FOCUSED TASK ID
    function updateTaskID(id){
        setTaskID(id)
        setDisabled(false)
        setShowUpdateForm(true)
    }

    // A FUNCTION THAT UPDATES FORMDATA FIELDS
    function updateFormData(e){
        const { name, value } = e.target

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    // A FUNCTION THAT VALIDATES FORM DATA
    function validateFormData(){
        const { activity, deadline } = formData

        if(!activity && !deadline){
            return null
        }else if(!activity && deadline){
            return { deadline }
        }else if(!deadline && activity){
            return { activity }
        }else{
            return formData
        }
    }

    // A FUNCTION THAT UPDATES A TASK
    async function updateTask(id){
        setFormData({
            activity: "",
            deadline: ""
        })

        if(!validateFormData()){
            return
        }

        try{
            const res = await fetch(`https://trackminder-project.onrender.com/tasks/task/${id}`, {
                method: "PATCH",
                body: JSON.stringify(validateFormData()),
                headers: {
                    "Authorization": `Bearer ${user.token}`,
                    "Content-Type": "application/json"
                } 
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

                tasksDispatch({
                    type: "UPDATE_TASK",
                    payload: response.data
                })
            }
        }catch(error){
            setSuccess('')
            setError(error.message)
            setDisabled(false)
        }
    }

    // A FUNCTION THAT CREATES A TASK
    async function createTask(){
        setFormData({
            activity: "",
            deadline: ""
        })

        try{
            const res = await fetch(`https://trackminder-project.onrender.com/tasks?collection=${collectionID}`, {
                method: "POST",
                body: JSON.stringify(formData),
                
                headers: {
                    "Authorization": `Bearer ${user.token}`,
                    "Content-Type": "application/json"
                } 
            })

            const response = await res.json()
            setDisabled(true)

            if(!res.ok){
                setSuccess('')
                setError(response.error)
                setDisabled(false)
            }else{
                tasksDispatch({
                    type: "ADD_TASK",
                    payload: response.data
                })

                setError('')
                setSuccess(response.success)
                setDisabled(false)
            }
        }catch(error){
            setSuccess('')
            setError(error.message)
            setDisabled(false)
        }
    }

    // A FUNCTION THAT DELETES ALL TASK
    async function deleteAllTasks(){
        try{
            const res = await fetch(`https://trackminder-project.onrender.com/tasks/?collection=${collectionID}`, {
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

                tasksDispatch({ type: "DELETE_ALL_TASKS" })
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
                    handleUpdate = {() => updateTaskID(task._id)}
                    key={task._id}
                    id={task._id}
                    styles = {darkMode ? styles.taskCell.dark : styles.taskCell.light}    
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
            className="min-h-screen transition-all duration-500 relative scroll-smooth"
            style={darkMode ? styles.tasksContainer.dark : styles.tasksContainer.light}
        >
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
                    <DataForm
                        formTitle="Add Task"
                        hideForm = {() => setShowForm(false)}
                        fieldTitle1 = "Activity"
                        fieldType1 = "text"
                        fieldName1 = "activity"
                        fieldPlaceholder1 = "Your task's activity"
                        handleChange = {(e) => updateFormData(e)}
                        formData = {formData}
                        fieldTitle2 = "Deadline"
                        fieldType2 = "datetime-local"
                        fieldName2 = "deadline"
                        fieldPlaceholder2 = "Your optional date and time"
                        styles = {darkMode ? styles.dataForm.dark : styles.dataForm.light}
                        
                        button = {<AuthenticationButton
                            innerText = "Add Task"
                            disabled = {disabled}
                            handleClick = {createTask}
                            styles = {darkMode ? styles.authenticationButton.dark : styles.authenticationButton.light}
                        />}
                    />
                :
                        showUpdateForm
                    ?
                        <DataForm
                            formTitle="Update Task"
                            hideForm = {() => setShowUpdateForm(false)}
                            fieldTitle1 = "Activity"
                            fieldType1 = "text"
                            fieldName1 = "activity"
                            fieldPlaceholder1 = "Your task's activity"
                            handleChange = {(e) => updateFormData(e)}
                            formData = {formData}
                            fieldTitle2 = "Deadline"
                            fieldType2 = "datetime-local"
                            fieldName2 = "deadline"
                            fieldPlaceholder2 = "Your optional date and time"
                            styles = {darkMode ? styles.dataForm.dark : styles.dataForm.light}
                            
                            button = {<AuthenticationButton
                                innerText = "Update"
                                disabled = {disabled}
                                handleClick = {() => updateTask(taskID)}
                                styles = {darkMode ? styles.authenticationButton.dark : styles.authenticationButton.light}
                            />}
                        />
                    :
                        null
            }

            {/* A NAVBAR TO DIRECT TO COLLECTIONS PAGE OR USER PROFILE */}
            <NavBar
                url='/home/collections'
                navigationTitle= {getCollectionName()}
                username = {user.username}
                styles = { darkMode ? styles.navBar.dark : styles.navBar.light }
            />
        
            {/* A CONTAINER FOR ALL TASK CELLS */}
            <div className="flex flex-col justify-evenly items-center">
                {tasks && generateTasksArray()}
            </div>

            {/* A FOOTER CONTAINING ADD AND DELETE BUTTONS */}
            <Footer
                addTitle="Add Task"
                deleteTitle="Delete All Tasks"
                disabled={disabled}
                showForm={() => setShowForm(true)}
                handleDelete={deleteAllTasks}
                styles={darkMode ? styles.footer.dark : styles.footer.light}
            />
        </div>
    )
}