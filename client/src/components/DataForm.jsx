// EXPORTING THE DATA FORM FUNCTION
export default function DataForm(props){
    return (
        <div 
        className="min-h-full w-full z-20 absolute dark:bg-black dark:bg-opacity-60 transition-all duration-500 cursor-pointer bg-white bg-opacity-30 flex justify-center items-center"
        id="updateForm-container"
        >
            <div
                className="w-[90%] min-h-[80vh] bg-orange-200 shadow-titleCard flex flex-col rounded-[25px] items-center justify-evenly dark:bg-[#363636] dark:shadow-successCard animate-pop-up"
                id="updateForm">
                    <h1 className="font-[700] text-2xl text-left md:text-center pl-[30px] relative w-full">
                        <p className="text-center">{props.formTitle}</p>
                        
                        <button 
                            className="absolute top-0 right-[5%] bg-red-500 p-[10px] font-[700] font-[Lato] text-sm text-center rounded-lg transition-all duration-500 shadow-button active:scale-110 hover:scale-90 my-auto active:bg-green-500 active:text-black"
                            onClick={props.hideForm}
                        >X</button>
                    </h1>
                    
                    <div 
                        id="first-field" 
                        className="flex gap-[1rem]"
                    >
                        <p className="my-auto">{props.fieldTitle1}</p>
                        
                        <input 
                            type={props.fieldType1}
                            autoComplete="on"
                            name={props.fieldName1}
                            required
                            placeholder={props.fieldPlaceholder1}
                            onChange={props.handleChange}
                            value={props.formData.name || props.formData.activity}
                            className="dark:rounded-[4px] dark dark:border-[#979797] dark:bg-[#1D1D1D] dark:text-[#535353] p-[10px] w-[90%] md:w-[100%] rounded-[22px] transition-all duration-500"
                        />
                    </div>
                    
                    <div 
                        id="second-field" 
                        className="flex gap-[1rem] justify-center"
                    >
                        <p className="my-auto break-words">{props.fieldTitle2}</p>
                        
                        <input 
                            type={props.fieldType2}
                            autoComplete="on"
                            name={props.fieldName2}
                            placeholder={props.fieldPlaceholder2}
                            onChange={props.handleChange}
                            value={props.formData.description || props.formData.deadline}
                            className="dark:rounded-[4px] dark dark:border-[#979797] dark:bg-[#1D1D1D] dark:text-[#535353] p-[10px] w-[90%] md:w-[100%] rounded-[22px] transition-all duration-500"
                        />
                    </div>

                    {props.button}
            </div>
        </div>
    )    
}