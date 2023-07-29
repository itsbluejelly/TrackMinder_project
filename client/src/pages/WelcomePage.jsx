// IMPORTING NECESSARY MODULES AND COMPONENTS
import React from 'react'
import { Link } from 'react-scroll'
import { Navigate } from 'react-router-dom'
import SignupButton from "../components/SignupButton"
import LoginButton from '../components/LoginButton'
import NextButton from "../components/NextButton"
import UserContextHook from '../hooks/UserContextHook'

// EXPORTING THE WELCOME PAGE
export default function WelcomePage(){
    // OBTAINING THE GLOBAL USER STATE FROM THE USER CONTEXT HOOK
    const { user, dispatch } = UserContextHook()
    
    // A USEEFFECT FUNCTION THAT GETS THE CURRENT USER
    React.useEffect(() => {
        dispatch({type: "GET_USER"})
    }, [])

    // A CONDITION TO EXECUTE THE REDIRECT
    if(user){
        return <Navigate to="/home/collections"/>
    }

    return(
        // A WELCOME-PAGE CONTAINER THAT CONTAINS ALL THREE PAGE INSTANCES
        <div 
            className="flex flex-col scroll-smooth bg-light-theme dark:bg-dark-theme transition-all duration-500 min-h-[100vh] overflow-x-hidden"
            id="welcome-page"
        >
            {/* A FIRST PAGE THAT CONTAINS ALL 3 BUTTONS AND WELCOME LOGO */}
            <div 
                className="flex flex-col justify-around items-center transition-all duration-500 h-[100vh] animate-fade-show"
                id="page1"
            >
                <figure>
                    <img 
                        src="/img/TrackMinder_logo.png" 
                        alt="TrackMinder Logo"
                        title="TrackMinder Logo"
                        width="100%"
                        height="100%" 
                    />
                    
                    <figcaption
                        className="dark:text-white font-[Lato] font-[700] text-2xl leading-10 tracking-wider"
                    >
                        <p>TrackMinder</p>
                    </figcaption>
                </figure>

                <div 
                    id="button-container-page1"
                    className='flex items-center gap-[20px] flex-col'
                >
                    {/* THE FIRST TWO SIGNUP AND LOGIN BUTTONS, WHICH DIRECT YOU TO SIGNUP AND LOGIN ROUTES RESPECTIVELY */}
                    <SignupButton/>
                    <LoginButton/>
                    
                    {/* THE NEXT BUTTON, WHICH DIRECTS YOU TO NEXT PAGE */}
                    <Link 
                        to='page2' 
                        smooth={ true }
                    >
                        <NextButton/>
                    </Link>
                </div>
            </div>
            
            {/* THE SECOND INTRO PAGE */}
            <div 
                className="flex justify-around items-center transition-all duration-500 flex-col relative h-[100vh]"
                id="page2"
            >
                <p
                    className="dark:text-white font-[Lato] font-[700] text-2xl leading-10 tracking-wider transition-all opacity-10 hover:opacity-100 duration-500 cursor-pointer"
                >Organize Your Tasks</p>

                <p
                    className="dark:text-white font-[Lato] font-[700] text-2xl leading-10 tracking-wider absolute transition-all opacity-10 hover:opacity-100 duration-500 cursor-pointer"
                >Easily</p>

                {/* THE NEXT BUTTON THAT DIRECTS YOU TO THE NEXT INTRO PAGE */}
                <Link 
                    to='page3' 
                    smooth={ true }
                >
                    <NextButton/>
                </Link>
            </div>
            
            {/* THE LAST INTRO PAGE */}
            <div 
                className="flex items-center flex-col min-w-[100vw] justify-around h-[100vh]"
                id="page3"
            >
                <header 
                    className="flex flex-col gap-[1rem]"
                >
                    <h1 
                        className="text-center dark:text-white font-[Lato] font-[700] text-[2rem] leading-10 tracking-wider mb-[20px] underline"
                    >Welcome to TrackMinder</h1>
                    
                    <h3 className="dark:text-white font-[Lato] font-[700] text-xl leading-10 text-justify w-[300px] mx-auto hover:underline tracking-wide">Please login to your account or create new account to continue</h3>
                </header>

                <div 
                    className="flex flex-col items-center gap-[2rem] mb-[20px]"
                    id="button-container-page3"
                >
                    {/* THE SIGNUP AND LOGIN BUTTONS DIRECT YOU TO THE SIGNUP AND LOGIN ROUTES RESPECTIVELY */}
                    <SignupButton/>
                    <LoginButton/>
                </div>
            </div>
        </div>
    )
}