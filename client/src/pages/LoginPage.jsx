// IMPORTING NECESSARY MODULES AND COMPONENTS
import React from "react"
import { NavLink } from "react-router-dom"
import AuthenticationForm from "../components/AuthenticationForm"
import AuthenticationButton from "../components/AuthenticationButton"

// EXPORTING THE LOGIN PAGE
export default function LoginPage(){
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

    return(
        // A LOGIN-PAGE CONTAINER THAT HOLDS ALL LOGIN PAGE CONTENT
        <div 
            id="signup-page"
            className="bg-light-theme dark:bg-dark-theme scroll-smooth min-h-[100vh] dark:text-dark-theme-text font-[Lato] transition-all duration-500 flex flex-col justify-evenly relative"
        >
            <h1 className="font-[700] text-2xl top-[50px] py-[50px] text-left md:text-center pl-[30px]">Welcome back, Log In</h1>

            {/* THE AUTHENTICATION FORM WHICH HAS THE EMAIL, PASSWORD AND USERNAME INPUTS */}
            <div className="pl-[30px]">
                <AuthenticationForm
                    handleChange = {(e) => updateData(e)}
                    formData = {formData}
                />
            </div>

            {/* THE AUTHENTICATION BUTTON THAT POSTS USER INFORMATION */}
            <AuthenticationButton
                innerText = "Log in"
            />

            {/* A FOOTER TEXT TO TOGGLE BTWN LOGIN AND SIGNUP ROUTES */}
            <p 
                className="mb-[30px] text-center tracking-wide"
                >
                    Don't Have an account? <NavLink className="text-[#D8605B] font-[700] cursor-pointer dark:text-[#8875FF] hover:underline transition-all duration-500 active:text-white" to="/signup">sign up</NavLink>
            </p>
        </div>
    )
}