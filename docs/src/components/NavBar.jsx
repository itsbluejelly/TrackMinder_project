// IMPORTING NECESSARY MODULES
import { NavLink } from "react-router-dom"

// EXPORTING THE NAVBAR FUNCTION
export default function NavBar(props){
    return(
        <header 
            className="sticky top-0 flex justify-between w-full text-black font-semibold text-lg p-[20px] z-10"
            id="navbar-header"
            style={props.styles.navbarHeader}
        >
            <NavLink 
                className="text-xl  my-auto dark:active:text-white active:underline active:underline-offset-2 transition-all duration-500 active:text-light-theme hover:scale-105 ml-[20px]" 
                to={props.url}
            >{props.navigationTitle}</NavLink>

            {/* LINK TO USER PROFILE */}
            <div className="flex gap-2 flex-row-reverse mr-[20px]">
                <NavLink 
                    className="rounded-full hover:scale-95 cursor-pointer active:animate-ping border border-black w-[50px] h-[50px] ml-[10px] flex justify-center items-center transition-all duration-500" 
                    to="/home/user/profile"
                    id="user-profile-link"
                    style={props.styles.userProfileLink}
                >{props.username.slice(0, 3)}</NavLink>
                
                <span className="my-auto">{props.username}</span>
            </div>
        </header>
    )
}