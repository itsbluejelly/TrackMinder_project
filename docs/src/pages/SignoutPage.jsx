// IMPORTING NECESSARY MODULES AND COMPONENTS
import React from "react"
import ErrorPopup from "../components/ErrorPopup"
import AuthenticationButton from "../components/AuthenticationButton"
import AuthenticationForm from "../components/AuthenticationForm"
import UserContextHook from "../hooks/UserContextHook"
import { NavLink } from "react-router-dom"

// EXPORTING DEFAULT SIGNOUTPAGE FUNCTION
export default function signoutPage(){
    // DEFINING A BOOLEAN STATE TO DETERMINE IF AN ERROR OCCURS
    const [error, setError] = React.useState(false)
    // DEFINING A BOOLEAN STATE TO DETERMINE INACTIVITY OF BUTTON
    const [disabled, setDisabled] = React.useState(false)

    // DEFINING A STATE TO STORE INITIAL VALUE OF FORMDATA
    const [formData, setFormData] = React.useState({
        username: "",
        email: "",
        password: ""
    })

    // OBTAINING GLOBAL USER AND DISPATCH CONTEXT
    const { user, dispatch } = UserContextHook()

    // A FUNCTION TO UPDATE FORM DATA
    function updateFormData(e){
        const { name, value } = e.target

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    // A FUNCTION TO UPLOAD FORM DATA
    async function submitFormData(){
        setFormData({
            username: "",
            email: "",
            password: ""
        })

        try{
            const res = await fetch('http://localhost:3000/user/signout', {
                method: "DELETE",
                
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                    'Content-Type': "application/json"
                },
                
                body: JSON.stringify(formData)
            })

            const response = await res.json()
            setDisabled(true)

            if(!res.ok){
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
                setDisabled(false)

                dispatch({ type: "LOG_OUT"})
            }
        }catch(error){
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

    return (
        // A SIGNOUTPAGE CONTAINER THAT HOLDS ALL CONTENT
        <div 
            id="signout-page"
            className="bg-light-theme dark:bg-dark-theme scroll-smooth min-h-[100vh] dark:text-dark-theme-text font-[Lato] transition-all duration-500 flex flex-col justify-evenly relative"
        >
            {/* AN ERROR COMPONENT ONLY SHOWN IF THERE IS AN ERROR */}
            {error && <ErrorPopup
                errorMessage = {error}
                handleClick = {() => setError("")}
            />}

            <h1 className="font-[700] text-2xl top-[50px] py-[50px] text-left md:text-center pl-[30px]">We'll Miss You, Sign Out</h1>

            {/* THE AUTHENTICATION FORM WHICH HAS THE EMAIL, PASSWORD AND USERNAME INPUTS */}
            <div className="pl-[30px]">
                <AuthenticationForm
                    handleChange = {(e) => updateFormData(e)}
                    formData = {formData}
                />
            </div>

            {/* THE AUTHENTICATION BUTTON THAT POSTS USER INFORMATION */}
            <AuthenticationButton
                innerText = "Sign Out"
                handleClick = {submitFormData}
                disabled = {disabled}
            />

            {/* A FOOTER TEXT TO TOGGLE BTWN HOME AND SIGNOUT ROUTES */}
            <p 
                className="mb-[30px] text-center tracking-wide"
                >
                    Having doubts? <NavLink className="text-[#D8605B] font-[700] cursor-pointer dark:text-[#8875FF] hover:underline transition-all duration-500 active:text-white" to="/home/collections">Go back to home page</NavLink>
            </p>
        </div>
    )
}