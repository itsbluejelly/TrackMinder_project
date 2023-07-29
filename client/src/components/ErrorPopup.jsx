// EXPORTING THE ERRORPOPUP FUNCTION
export default function ErrorPopup(props){
    return(
        <div className="flex justify-center min-h-[100vh] absolute items-center w-full z-10 bg-opacity-30 bg-white">
            <div className="flex flex-col gap-[3rem] bg-white w-[350px] items-center rounded-[10px] p-[20px] shadow-titleCard transition-all duration-500 animate-drop-down">
                <h1 className="mt-[10px] text-center text-red-700 font-bold text-xl">{props.errorMessage}</h1>
                
                <button 
                    className="bg-green-700 w-[150px] p-[10px] rounded-[20px] text-[whitesmoke] font-[Poppins] font-[700] text-lg shadow-button active:bg-red-700 transition-all duration-500"
                    onClick={props.handleClick}
                >Okay</button>
            </div>
        </div>
    )
}