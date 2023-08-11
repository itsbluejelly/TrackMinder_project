// EXPORTING THE AUTHENTICATION BUTTON
export default function AuthenticationButton(props){
    return (
        <button 
            className="my-[20px] w-[315px] mx-auto h-[56px] text-white font-[700] tracking-wider text-lg transition-all duration-500 active:bg-white active:text-black dark:shadow-xl"
            onClick={props.handleClick}
            disabled={props.disabled}
            style={props.styles}
        >{props.innerText}</button>
    )
}