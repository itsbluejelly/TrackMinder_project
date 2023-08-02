// IMPORTING NECESSARY MODULES AND COMPONENTS
import ErrorPopup from "../components/ErrorPopup"
import SuccessPopup from "../components/SuccessPopup"
import AuthenticationButton from "../components/AuthenticationButton"
import AuthenticationForm from "../components/AuthenticationForm"

// EXPORTING DEFAULT SIGNOUTPAGE FUNCTION
export default function signoutPage(){
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
                innerText = "Log In"
                handleClick = {submitData}
                disabled = {disabled}
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