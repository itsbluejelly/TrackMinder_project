// EXPORTING HIDEALLPOPUP FUNCTION
export default function GeneralPopup(props){
    return (
        <div className="flex justify-center min-h-full absolute items-center w-full z-20 bg-opacity-30 bg-white">
            <div className="flex flex-col gap-[3rem] bg-white w-[350px] items-center rounded-[10px] p-[20px] shadow-titleCard transition-all duration-500 animate-drop-down relative">
                <button 
                    className="absolute top-[5%] right-[5%] bg-red-500 p-[10px] font-[700] font-[Lato] text-sm text-center rounded-lg transition-all duration-500 shadow-button active:scale-110 hover:scale-90 my-auto active:bg-green-500 active:text-black"
                    onClick={props.handleClose}
                >X</button>
                
                <h1 className="mt-[10px] text-left text-red-700 font-bold text-lg">{props.popupMessage}</h1>
                
                <button 
                    className="bg-green-700 w-[150px] p-[10px] rounded-[20px] text-[whitesmoke] font-[Poppins] font-[700] text-lg shadow-button active:bg-red-700 transition-all duration-500 text-center"
                    onClick={props.handleClick}
                >Okay</button>
            </div>
        </div>
    )
}