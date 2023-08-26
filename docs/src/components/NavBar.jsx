// IMPORTING NECESSARY MODULES
import { NavLink } from "react-router-dom"

// EXPORTING THE NAVBAR FUNCTION
export default function NavBar(props){
    return(
        <header 
            className="top-0 flex justify-between w-full text-black font-semibold text-lg p-[20px] z-10 mb-[100px]"
            id="navbar-header"
            style={props.styles.navbarHeader}
        >
            <div className="flex flex-row justify-center">
                <div 
                    id="footer-shower-border"
                    className="cursor-pointer hover:text-2xl transition-all duration-300 active:text-light-theme dark:active:text-white hidden lg:flex my-auto w-[30px] h-[30px] border-[2px] border-black rounded-full justify-center items-center animate-pop-up active:animate-ping"
                    style={props.styles.footerShowerBorder}
                >
                    <div 
                        id="footer-shower"
                        className="flex justify-center items-center text-sm w-[20px] h-[20px] rounded-full transition-all duration-500 hover:scale-110"
                        style={props.styles.footerShower}
                        onClick={props.handleShowFooter}
                    >i</div>
                </div>

                <NavLink 
                    className="text-xl my-auto dark:active:text-white active:underline active:underline-offset-2 transition-all duration-500 active:text-light-theme hover:scale-105 ml-[20px] lg:ml-[10px]" 
                    to={props.url}
                >{props.navigationTitle}</NavLink>
            </div>

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