// IMPORTING NECESSARY MODULES AND COMPONENTS
import React from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import AuthenticationForm from "../components/AuthenticationForm"
import AuthenticationButton from "../components/AuthenticationButton"
import ErrorPopup from '../components/ErrorPopup'
import UserContextHook from '../hooks/UserContextHook'

// EXPORTING SIGNUPPAGE FUNCTION
export default function SignupPage(){
    // DECLARING A STATE BOOLEAN TO DETERMINE ERROR MESSAGES
    const [error, setError] = React.useState("")
    // DECLARING A STATE BOOLEAN TO DIABLE THE AUHENTICATION BUTTON
    const [disabled, setDisabled] = React.useState(false)
    // IMPORTING GLOBAL USER AND DISPATCH
    const { user, dispatch } = UserContextHook()

    // DECLARING A VARIABLE TO KEEP TRACK OF FORM DATA
    const [formData, setFormData] = React.useState({
        username: "",
        email: "",
        password: ""
    })

    // DECLARING A FUNCTION TO UPDATE FORM DATA
    function updateData(e){
        const { name, value } = e.target

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    // DECLARING A FUNTION TO SUBMIT FORM DATA
    async function submitData(){
        setFormData({
            username: "",
            email: "",
            password: ""
        })

        try{
            const res = await fetch('http://localhost:3000/user/signup', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body:  JSON.stringify(formData)
            })

            const response = await res.json()
            setDisabled(true)

            if(!res.ok){
                setError(response.error)
                setDisabled(false)
            }else{
                setError('')
                
                dispatch({
                    type: "LOG_IN",
                    payload: response.user
                })
            }
        }catch(error){
            setError(error.message)
        }
    }

    return(
        // A SIGNUP-PAGE CONTAINER THAT HOLDS ALL SIGNUP PAGE CONTENT
        <div 
            id="signup-page"
            className="bg-light-theme dark:bg-dark-theme scroll-smooth min-h-[100vh] dark:text-dark-theme-text font-[Lato] transition-all duration-500 flex flex-col justify-evenly relative"
        >
            {/* AN ERROR COMPONENT ONLY SHOWN IF THERE IS AN ERROR */}
            {error && <ErrorPopup
                errorMessage = {error}
                handleClick = {() => setError("")}
            />}

            <h1 className="font-[700] text-2xl top-[50px] py-[50px] text-left md:text-center pl-[30px]">Hello There, Create An Account</h1>

            {/* THE AUTHENTICATION FORM WHICH HAS THE EMAIL, PASSWORD AND USERNAME INPUTS */}
            <div className="pl-[30px]">
                <AuthenticationForm
                    handleChange = {(e) => updateData(e)}
                    formData = {formData}
                    styles = {""}
                />
            </div>

            {/* THE AUTHENTICATION BUTTON THAT POSTS USER INFORMATION */}
            <AuthenticationButton
                innerText = "Sign Up"
                handleClick = {submitData}
                disabled = {disabled}
            />

            {/* A FOOTER TEXT TO TOGGLE BTWN LOGIN AND SIGNUP ROUTES */}
            <p 
                className="mb-[30px] text-center tracking-wide"
                >
                    Already Have an account? <NavLink className="text-[#D8605B] font-[700] cursor-pointer dark:text-[#8875FF] hover:underline transition-all duration-500 active:text-white" to="/login">log in</NavLink>
            </p>
        </div>
    )
}