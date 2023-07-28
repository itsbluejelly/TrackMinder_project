// EXPORTING THE AUTHENTICATION BUTTON
export default function AuthenticationButton(){
    return (
        <button 
            className="my-[20px] bg-light-theme-gradient w-[315px] mx-auto h-[56px] rounded-[50px] text-white font-[700] tracking-wider text-lg shadow-button dark:shadow-xl dark:rounded-[5px] dark:bg-dark-theme-gradient transition-all duration-500 active:bg-white active:text-black"
            type="submit"
        >Login</button>
    )
}