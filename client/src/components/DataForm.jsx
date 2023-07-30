// EXPORTING THE DATA FORM FUNCTION
export default function DataForm(props){
    return (
        <div 
        className="min-h-[100vh] w-full z-20 absolute dark:bg-black dark:bg-opacity-60 transition-all duration-500 cursor-pointer bg-white bg-opacity-30 flex justify-center items-center"
        id="updateForm-container"
        >
            <div
                className="w-[75%] min-h-[50vh] bg-orange-200 shadow-titleCard flex flex-col rounded-[25px] items-center justify-evenly dark:bg-[#363636] dark:shadow-successCard animate-pop-up"
                id="updateForm">
                    <h1 className="font-[700] text-2xl text-left md:text-center pl-[30px]">Title</h1>
                    
                    <div 
                        id="name-field" 
                        className="flex gap-[1rem]"
                    >
                        <p className="my-auto">Field1</p>
                        
                        <input 
                            type="text"
                            autoComplete="on"
                            name="name"
                            required
                            placeholder="Field1"
                            className="dark:rounded-[4px] dark dark:border-[#979797] dark:bg-[#1D1D1D] dark:text-[#535353] p-[10px] w-[90%] md:w-[100%] rounded-[22px] transition-all duration-500"
                        />
                    </div>
                    
                    <div 
                        id="description-field" 
                        className="flex gap-[1rem] justify-center"
                    >
                        <p className="my-auto break-words">Field2</p>
                        
                        <input 
                            type="text"
                            autoComplete="on"
                            name="Field2"
                            placeholder="New description(optional)"
                            className="dark:rounded-[4px] dark dark:border-[#979797] dark:bg-[#1D1D1D] dark:text-[#535353] p-[10px] w-[90%] md:w-[100%] rounded-[22px] transition-all duration-500"
                        />
                    </div>

                    {props.button}
            </div>
        </div>
    )    
}