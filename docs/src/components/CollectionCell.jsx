// IMPORTING NECESSARY MODULES
import { NavLink } from "react-router-dom"

// EXPORTING THE COLLECTION FUNCTION
export default function CollectionCell(props){
    return(
        <div 
            className="w-[300px] h-[250px] flex flex-col m-[50px] bg-white rounded-[25px] text-xl transition-all duration-500 relative mb-[100px]"
            id="cell-container"
            style={props.styles.cellContainer}

        >
            <h1 
                className="h-[40%] flex flex-col justify-center items-center font-[700] rounded-t-[25px]"
                id="name-section"
                style={props.styles.nameSection}
            >
                <NavLink 
                    className="text-2xl tracking-wider"
                    id="collection-name"
                    to={`/home/collection/${props.id}`}
                >{ props.name }</NavLink>
                
                <small 
                    className="text-justify text-sm flex justify-center items-center break-words mt-[5px] p-[10px] rounded-[10px]"
                    id="updated-date"
                    style={props.styles.updatedDate}
                >{ props.createdDate }</small>
            </h1>

            <div 
                className="flex justify-center h-[75%] items-center rounded-b-[25px]"
                id="extra-info-section"
                style={props.styles.extraInfoSection}
            >
                <p 
                    className="max-w-[20ch] break-words text-center hover:text-2xl transition-all duration-500"
                    id="description"
                >{ props.description }</p>
                
                <button 
                    className="absolute top-[35%] left-[5%] p-[5px] text-[2rem] mt-[10px] rounded-full border active:bg-red-600 transition-all duration-500 active:scale-125 w-[45px] h-[45px] active:text-white active:border-white dark:active:text-black dark:active:border-black cursor-pointer" 
                    title="delete-button"
                    id="delete-button"
                    onClick={props.handleDelete}
                    disabled={props.disabled}
                    style={props.styles.button}
                >&#128465;</button>
                
                <button 
                    className="absolute top-[35%] right-[5%] p-[5px] text-[2rem] mt-[10px] rounded-full border active:bg-blue-600 transition-all duration-500 active:scale-125 w-[45px] h-[45px] cursor-pointer active:text-white active:border-white dark:active:text-black dark:active:border-black" 
                    title="update-button"
                    id={props.id}
                    onClick={props.updateCollectionID}
                    style={props.styles.button}
                >&#128394;</button>
            </div>
        </div>
    )
}