// IMPORTING NECESSARY COMPONENTS
import AuthenticationForm from "../components/AuthenticationForm"
import AuthenticationButton from "../components/AuthenticationButton"

// EXPORTING THE LOGIN PAGE
export default function LoginPage(){
    return(
        // A LOGIN-PAGE CONTAINER THAT HOLDS ALL LOGIN PAGE CONTENT
        <div 
            id="login-page"
            className="bg-light-theme dark:bg-dark-theme scroll-smooth min-h-[100vh] dark:text-dark-theme-text font-[Lato] transition-all duration-500 pl-[30px] flex flex-col justify-evenly"
        >
            <h1 className="font-[700] text-2xl top-[50px] py-[50px] text-left md:text-center">Login</h1>

            {/* THE AUTHENTICATION FORM WHICH HAS THE EMAIL, PASSWORD AND USERNAME INPUTS */}
            <AuthenticationForm/>

            {/* THE AUTHENTICATION BUTTON THAT POSTS USER INFORMATION */}
            <AuthenticationButton/>

            {/* A FOOTER TEXT TO TOGGLE BTWN LOGIN AND SIGNUP ROUTES */}
            <p className="mb-[30px] text-center tracking-wide">Don't Have an account? <span className="text-[#D8605B] font-[700] cursor-pointer dark:text-[#8875FF] hover:underline transition-all duration-500 active:text-white">sign up</span></p>
        </div>
    )
}