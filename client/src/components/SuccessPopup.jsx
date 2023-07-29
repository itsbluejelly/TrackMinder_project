// EXPORTING SUCCESSPOPUP FUNCTION
export default function SuccessPopup(props){
    return(
        <div 
            className='flex justify-center min-h-[100vh] bg-black bg-opacity-60 z-10 absolute w-full items-end transition-all duration-500 cursor-pointer'
            onClick= {props.handleClick}
        >
            <h1 className='w-[300px] mb-[50px] mx-auto bg-green-600 p-[20px] text-center rounded-[30px] shadow-successCard text-xl font-[700] font-[Poppins] active:bg-yellow-600 transition-all duration-500 cursor-pointer hover:scale-125 animate-pop-up'>{props.successMessage}</h1>
        </div>
    )
}