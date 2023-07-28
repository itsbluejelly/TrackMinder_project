// IMPORTING NECESSARY MODULES AND COMPONENTS
import { NavLink } from 'react-router-dom'
import AuthenticationForm from "../components/AuthenticationForm"
import AuthenticationButton from "../components/AuthenticationButton"

// EXPORTING SIGNUPPAGE FUNCTION
export default function SignupPage(){
    return(
        // A SIGNUP-PAGE CONTAINER THAT HOLDS ALL SIGNUP PAGE CONTENT
        <div 
            id="signup-page"
            className="bg-light-theme dark:bg-dark-theme scroll-smooth min-h-[100vh] dark:text-dark-theme-text font-[Lato] transition-all duration-500 pl-[30px] flex flex-col justify-evenly"
        >
            <h1 className="font-[700] text-2xl top-[50px] py-[50px] text-left md:text-center">Hello There, Create An Account</h1>

            {/* THE AUTHENTICATION FORM WHICH HAS THE EMAIL, PASSWORD AND USERNAME INPUTS */}
            <AuthenticationForm/>

            {/* THE AUTHENTICATION BUTTON THAT POSTS USER INFORMATION */}
            <AuthenticationButton/>

            {/* A FOOTER TEXT TO TOGGLE BTWN LOGIN AND SIGNUP ROUTES */}
            <p 
                className="mb-[30px] text-center tracking-wide"
                >
                    Already Have an account? <NavLink className="text-[#D8605B] font-[700] cursor-pointer dark:text-[#8875FF] hover:underline transition-all duration-500 active:text-white" to="/login">log in</NavLink>
            </p>
        </div>
    )
}