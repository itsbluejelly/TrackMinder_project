// IMPORTING NECESSARY MODULES AND COMPONENTS
import React from "react"
import ProfileCard from "../components/ProfileCard"
import UserContextHook from "../hooks/UserContextHook"
import SignOutPopup from "../components/SignOutPopup"

// EXPORTING THE PROFILEPAGE FUNCTION
export default function ProfilePage(){
    // A STATE TO MANAGE ERROR POPUP AS A NOTIFICATION
    const [showSignOut, setshowSignOut] = React.useState(false)
    // OBTAINING GLOBAL USER AND DISPATCH FUNCTION
    const { user, dispatch } = UserContextHook()

    return (
        // A PROFILE-PAGE-CONTAINER THAT HOLDS THE PROFILE CARD IN PLACE
        <div className="bg-light-theme-gradient min-h-[100vh] dark:bg-dark-theme-gradient flex justify-center items-center dark:text-dark-theme-text">
            {/* A SIGN OUT NOTIFICATION IF TRIGGERED */}
            {showSignOut && <SignOutPopup
                handleClick = {() => setshowSignOut(false)}
            />}

            {/* THE PROFILE CARD */}
            <ProfileCard
                username={user.username}
                email={user.email}
                handleLogOut = {() => dispatch({ type: "LOG_OUT" })}
                handleSignOut = {() => setshowSignOut(true)}
            />
        </div>
    )
}