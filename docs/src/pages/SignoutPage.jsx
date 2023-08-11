// IMPORTING NECESSARY MODULES AND COMPONENTS
import React from "react"
import ErrorPopup from "../components/ErrorPopup"
import AuthenticationButton from "../components/AuthenticationButton"
import AuthenticationForm from "../components/AuthenticationForm"
import UserContextHook from "../hooks/UserContextHook"
import StyleContextHook from "../hooks/StyleContextHook"
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
    // OBTAINING GLOBAL DARKMODE AND DISPATCH CONTEXT
    const {darkMode, dispatch:styleDispatch} = StyleContextHook()

    // AN OBJECT OF STYLE PROPERTIES
    const styles ={
        signoutPage: {
            dark: {
                backgroundColor: "#121212",
                color: "rgba(255, 255, 255, 0.87)"
            },

            light: { backgroundColor: "rgba(244, 194, 127, 0.67)" }
        },

        authenticationForm: {
            dark: {input: {
                borderRadius: "4px",
                borderColor: "#979797",
                backgroundColor: "#1D1D1D",
                color: "#535353"
            }},

            light: {input: { borderRadius: "22px" }}
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

        footer: {
            dark: { color: "#8875FF" },
            light: { color: "#D8605B"}
        }
    }


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
            className="font-[Lato] transition-all duration-500 flex flex-col justify-evenly relative scroll-smooth min-h-[100vh]"
            style={darkMode ? styles.signoutPage.dark : styles.signoutPage.light}
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
                    styles = {darkMode ? styles.authenticationForm.dark : styles.authenticationForm.light}
                />
            </div>

            {/* THE AUTHENTICATION BUTTON THAT POSTS USER INFORMATION */}
            <AuthenticationButton
                innerText = "Sign Out"
                handleClick = {submitFormData}
                disabled = {disabled}
                styles = {darkMode ? styles.authenticationButton.dark : styles.authenticationButton.light}
            />

            {/* A FOOTER TEXT TO TOGGLE BTWN HOME AND SIGNOUT ROUTES */}
            <p 
                className="mb-[30px] text-center tracking-wide"
                >
                    Having doubts? <NavLink 
                        className=" hover:underline transition-all duration-500 active:text-white" to="/home/collections"
                        id="footer"
                        style={darkMode ? styles.footer.dark : styles.footer.light}
                    >Go back to home page</NavLink>
            </p>
        </div>
    )
}