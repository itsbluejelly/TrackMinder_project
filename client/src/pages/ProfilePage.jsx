// IMPORTING NECESSARY MODULES AND COMPONENTS
import React from "react"
import ProfileCard from "../components/ProfileCard"
import UserContextHook from "../hooks/UserContextHook"

// EXPORTING THE PROFILEPAGE FUNCTION
export default function ProfilePage(){
    // A BOOLEAN STATE TO KEEP TRACK OF DISABLED BUTTON
    const [disabled, setDisabled] = React.useState(false)
    // OBTAINING GLOBAL USER AND DISPATCH FUNCTION
    const { user, dispatch } = UserContextHook()

    return (
        // A PROFILE-PAGE-CONTAINER THAT HOLDS THE PROFILE CARD IN PLACE
        <div className="bg-light-theme-gradient min-h-[100vh] dark:bg-dark-theme-gradient flex justify-center items-center dark:text-dark-theme-text">
            {/* THE PROFILE CARD */}
            <ProfileCard
                username={user.username}
                email={user.email}
                handleLogOut = {() => dispatch({ type: "LOG_OUT" })}
            />
        </div>
    )
}