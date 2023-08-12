// EXPORTING THE AUTHENTICATION BUTTON
export default function AuthenticationButton(props){
    return (
        <button 
            className="my-[20px] w-[315px] mx-auto h-[56px] text-white font-[700] tracking-wider text-lg transition-all duration-500 active:bg-white active:text-black dark:shadow-xl bg-light-theme-gradient rounded-[50px] shadow-button dark:bg-dark-button-theme-gradient dark:rounded-[5px]"
            onClick={props.handleClick}
            disabled={props.disabled}
            style={props.styles}
        >{props.innerText}</button>
    )
}