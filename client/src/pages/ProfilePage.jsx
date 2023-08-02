// IMPORTING NECESSARY MODULES AND COMPONENTS
import ProfileCard from "../components/ProfileCard"

// EXPORTING THE PROFILEPAGE FUNCTION
export default function ProfilePage(){
    return (
        // A PROFILE-PAGE-CONTAINER THAT HOLDS THE PROFILE CARD IN PLACE
        <div className="bg-light-theme-gradient min-h-[100vh] dark:bg-dark-theme-gradient flex justify-center items-center dark:text-dark-theme-text">
            {/* THE PROFILE CARD */}
            <ProfileCard/>
        </div>
    )
}