// EXPORTING FOOTER FUNCTION
export default function Footer(props){
    return(
        <footer 
            className="absolute flex justify-center transition-all duration-500 rounded-full w-[70%] mx-auto font-semibold text-[14px] gap-[2rem] p-[10px] left-[15%] bottom-0"
            id="footer-container"
            style={props.styles.footerContainer}
        >
            <div className="flex flex-col gap-[1rem]">
                <button 
                    className="rounded-full bg-white border border-black w-[50px] h-[50px] flex justify-center items-center transition-all duration-500 active:scale-110 hover:scale-110 cursor-pointer text-black text-4xl font-[700] active:bg-green-700 active:text-white hover:shadow-button mx-auto"
                    onClick={props.showForm}
                    disabled={props.disabled}
                >+</button>
                
                <span className="mt-0 mx-auto font-[Lato]">{props.addTitle}</span>
            </div>
            
            <div className="flex flex-col gap-[1rem]">
                <button 
                    className="rounded-full bg-white border border-black w-[50px] h-[50px] flex justify-center items-center transition-all duration-500 active:scale-110 hover:scale-110 cursor-pointer text-black text-4xl font-[700] active:bg-red-700 active:text-white active:border-white hover:shadow-button mx-auto"
                    disabled={props.disabled}
                    onClick={props.handleDelete}
                >&#128465;</button>
                <span className="mt-0 mx-auto font-[Lato]">{props.deleteTitle}</span>
            </div>
        </footer>
    )
}