// IMPORTING NECESSARY MODULES
import { Link } from "react-router-dom"

// EXPORTING THE SIGNUP BUTTON
export default function SignupButton(){
    return (
        <Link to='/signup'>
            <button className="text-xl dark:text-white text-center rounded-[50px] w-[200px] bg-button-light-theme p-[20px] shadow-2xl dark:border-[#8E7CFF] cursor-pointer bg-light-theme dark:shadow-popup dark:bg-dark-theme dark:border transition-all duration-500 hover:w-[350px] focus:w-[350px] dark:active:bg-white dark:active:text-black active:bg-black active:text-white">Sign up</button>
        </Link>
    )
}