// EXPORTING THE DATA FORM FUNCTION
export default function DataForm(props){
    return (
        <div 
        className="min-h-full w-full z-20 absolute flex justify-center items-start transition-all duration-500 cursor-not-allowed"
        id="updateForm-container"
        style={props.styles.updateFormContainer}
        >
            <div
                className="w-[90%] min-h-[80vh] flex flex-col rounded-[25px] items-center justify-evenly animate-pop-up"
                id="updateForm"
                style={props.styles.updateForm}
            >
                    <h1 className="font-[700] text-2xl text-left md:text-center pl-[30px] relative w-full">
                        <p className="text-center">{props.formTitle}</p>
                        
                        <button 
                            className="absolute top-0 right-[5%] bg-red-500 p-[10px] font-[700] font-[Lato] text-sm text-center rounded-lg transition-all duration-500 shadow-button active:scale-110 hover:scale-90 my-auto active:bg-green-500 active:text-black cursor-pointer"
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
                            className="p-[10px] w-[90%] md:w-[100%] transition-all duration-500"
                            style={props.styles.input}
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
                            className="p-[10px] w-[90%] md:w-[100%] transition-all duration-500"
                            style={props.styles.input}
                        />
                    </div>

                    {props.button}
            </div>
        </div>
    )    
}