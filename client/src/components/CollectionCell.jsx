// IMPORTING NECESSARY MODULES
import { NavLink } from "react-router-dom"

// EXPORTING THE COLLECTION FUNCTION
export default function CollectionCell(props){
    return(
        <div className="w-[300px] h-[250px] flex flex-col shadow-collectionCard m-[50px] bg-white rounded-[25px] text-xl dark:shadow-popup transition-all duration-500 relative mb-[100px]">
            <h1 className="h-[40%] flex flex-col justify-center items-center font-[700] dark:bg-dark-theme-text dark:text-black rounded-t-[25px]">
                <NavLink 
                    className="text-2xl tracking-wider"
                    id="collection-name"
                    to={`/home/collection/${props.id}`}
                >{ props.name }</NavLink>
                
                <small 
                    className="text-justify text-sm flex justify-center items-center break-words mt-[5px] bg-[gold] p-[10px] rounded-[10px] dark:bg-[silver]"
                    id="updated-date"
                >{ props.createdDate }</small>
            </h1>

            <div className="flex justify-center h-[75%] items-center bg-[#F4C27F] dark:bg-[#8687E7] rounded-b-[25px]">
                <p 
                    className="max-w-[20ch] break-words text-center hover:text-2xl transition-all duration-500"
                    id="description"
                >{ props.description }</p>
                
                <button 
                    className="absolute top-[35%] left-[5%] p-[5px] text-[2rem] mt-[10px] rounded-full border active:bg-red-600 transition-all duration-500 active:scale-125 shadow-xl cursor-pointer  dark:border-white border-black active:text-white active:border-white dark:active:text-black dark:active:border-black" 
                    title="delete-button"
                    id="delete-button"
                    onClick={props.handleDelete}
                    disabled={props.deleteDisabled}
                >&#128465;</button>
                
                <button 
                    className="absolute top-[35%] right-[5%] p-[5px] text-[2rem] mt-[10px] rounded-full border active:bg-blue-600 transition-all duration-500 active:scale-125 shadow-xl cursor-pointer  dark:border-white border-black active:text-white active:border-white dark:active:text-black dark:active:border-black" 
                    title="update-button"
                    id={props.id}
                    onClick={props.updateCollectionID}
                >&#128394;</button>
            </div>
        </div>
    )
}