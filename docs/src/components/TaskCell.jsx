// EXPORTING THE TASKCELL FUNCTION
export default function TaskCell(props){
    return(
        <div 
            className="w-[80%] min-h-[80px] rounded-[20px] mt-[100px] shadow-button p-[10px] animate-drop-down transition-all duration-500 flex flex-col"
            id="task-container"
            style={props.styles.taskContainer}
        >
            <div className="bg-white rounded-t-[20px] rounded-b-md mb-[10px] border border-black shadow-button text-black">
                <h1 className="text-2xl font-[700] tracking-wide text-black hover:underline transition-all duration-500 cursor-text pl-[10px] break-words text-left max-h-[10ch] overflow-y-scroll max-w-[95%]">{props.activity}</h1 >
            </div>
            
            <div className="flex justify-evenly items-center font-[500] text-lg gap-[1rem] text-center">
                <div>
                    <p>Deadline</p>
                    <div className="bg-red-500 p-[10px] rounded-[15px] break-words text-center">
                        <p>{props.deadlineDate}</p>
                        <p>{props.deadlineTime}</p>
                    </div>
                </div>
                
                <div>
                    <p>Last update</p>
                    <p className="bg-green-500 p-[10px] rounded-[15px] break-words text-center">
                        <p>{props.updatedDate}</p>
                        <p>{props.updatedTime}</p>
                    </p>
                </div>
            </div>

            <div className="relative mt-[30px]">
                <button 
                    className="absolute bottom-[5%] left-[4%] text-[1rem] mt-[10px] rounded-full border w-[30px] h-[30px] active:bg-red-600 transition-all duration-500 active:scale-125 cursor-pointer active:text-white active:border-white dark:active:text-black dark:active:border-black"
                    id="delete-button"
                    onClick={props.handleDelete}
                    disabled={props.disabled}
                    style={props.styles.button}
                >&#128465;</button>
                
                <button 
                    className="absolute bottom-[5%] right-[4%] text-[1rem] mt-[10px] rounded-full border w-[30px] h-[30px] active:bg-blue-600 transition-all duration-500 active:scale-125 cursor-pointer active:text-white active:border-white dark:active:text-black dark:active:border-black"
                    id="update-button"
                    onClick={props.handleUpdate}
                    disabled={props.disabled}
                    style={props.styles.button} 
                >&#128394;</button>
            </div>
        </div>
    )
}