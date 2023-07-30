// IMPORTING NECESSARY MODULES
import { NavLink } from "react-router-dom"

// EXPORTING THE NAVBAR FUNCTION
export default function NavBar(props){
    return(
        <header className="sticky top-0 flex justify-between w-full bg-white dark:bg-[#8687E7] text-black font-semibold text-lg p-[20px] z-10 shadow-collectionCard dark:shadow-popup">
            <NavLink 
                className="text-xl  my-auto dark:active:text-white active:underline active:underline-offset-2 transition-all duration-500 active:text-light-theme hover:scale-105 ml-[20px]" 
                to='/home/collections'
            >{props.navigationTitle}</NavLink>

            {/* LINK TO USER PROFILE */}
            <div className="flex gap-2 flex-row-reverse mr-[20px]">
                <NavLink 
                    className="rounded-full dark:bg-white border border-black w-[50px] h-[50px] ml-[10px] flex justify-center items-center transition-all duration-500 bg-light-theme hover:scale-95 cursor-pointer active:animate-ping" 
                    to="/home/user/profile"
                >{props.username.slice(0, 3)}</NavLink>
                
                <span className="my-auto">{props.username}</span>
            </div>
        </header>
    )
}