// IMPORTING NECESSARY MODULES AND COMPONENTS
import React from "react"
import ProfileCard from "../components/ProfileCard"
import UserContextHook from "../hooks/UserContextHook"
import StyleContextHook from "../hooks/StyleContextHook"
import SignOutPopup from "../components/SignOutPopup"

// EXPORTING THE PROFILEPAGE FUNCTION
export default function ProfilePage(){
    // A STATE TO MANAGE SIGN OUT POPUP AS A NOTIFICATION
    const [showSignOut, setshowSignOut] = React.useState(false)
    // OBTAINING GLOBAL USER AND DISPATCH FUNCTION
    const { user, dispatch } = UserContextHook()
    // OBTAINING GLOBAL STYLE AND DISPATCH FUNCTIONS
    const {darkMode, dispatch:styleDispatch} = StyleContextHook() 
    
    // AN OBJECT OF STYLE PROPERTIES
    const styles = {
        profilePage: {
            dark: {
                backgroundImage: "linear-gradient(315deg, #111 0%, #4F4F4F 100%)",
                color: "rgba(255, 255, 255, 0.87)"
            },

            light: { backgroundImage: "linear-gradient(218deg, #D8605B 0%, #F4C27F 100%)" }
        },

        profileCard: {
            dark: {
                profileCardContainer: { backgroundColor: '#121212' },
                profilePicBorder: { borderColor: '#0F4E52' },
                profilePic: { backgroundColor: '#0F4E52' },
                email: { color: '#0F4E52' },
                tags: { borderBottomColor: "white" },
                lightThemeLabel: {color: 'rgb(14 165 233 / 1)'},

                scrollerHolder: {
                    backgroundImage: 'linear-gradient(315deg, #111 0%, #4F4F4F 100%)',
                    justifyContent: "flex-end"
                },

                scrollerBall: { backgroundColor: "rgb(55 65 81 / 1)" },
                darkThemeLabel: { color: "rgb(71 85 105 / 1" }
            },

            light: {
                profileCardContainer: { backgroundColor: "rgba(244, 194, 127, 0.67)" },
                profilePicBorder: { borderColor: '#D8605B' },
                profilePic: { backgroundColor: '#D8605B' },
                email: { color: '#D8605B' },
                tags: { borderBottomColor: "black" },
                lightThemeLabel: {color: 'rgb(30 64 175 / 1)'},

                scrollerHolder: {
                    backgroundImage: 'linear-gradient(218deg, #D8605B 0%, #F4C27F 100%)',
                    justifyContent: "flex-start"
                },

                scrollerBall: { backgroundColor: "white" },
                darkThemeLabel: { color: "rgb(30 41 59 / 1)" }
            }
        }
    }

    return (
        // A PROFILE-PAGE-CONTAINER THAT HOLDS THE PROFILE CARD IN PLACE
        <div 
            className="min-h-[100vh] flex justify-center items-center"
            id="profile-page"
            style={darkMode ? styles.profilePage.dark : styles.profilePage.light}
        >
            {/* A SIGN OUT NOTIFICATION IF TRIGGERED */}
            {showSignOut && <SignOutPopup
                handleClick = {() => setshowSignOut(false)}
            />}

            {/* THE PROFILE CARD */}
            <ProfileCard
                username={user.username}
                email={user.email}
                styles={darkMode ? styles.profileCard.dark : styles.profileCard.light}
                handleLogOut = {() => dispatch({ type: "LOG_OUT" })}
                handleSignOut = {() => setshowSignOut(true)}
                
                handleDarkMode = {
                    () => darkMode ? styleDispatch({ type: "LIGHT_MODE" }) : styleDispatch({ type: "DARK_MODE" })
                }
            />
        </div>
    )
}