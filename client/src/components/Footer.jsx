// EXPORTING FOOTER FUNCTION
export default function Footer(props){
    return(
        <footer className="sticky bottom-[20px] flex justify-center bg-orange-400 dark:bg-[#363636] font-semibold text-[14px] gap-[2rem] p-[10px] shadow-collectionCard dark:shadow-popup dark:text-white rounded-full w-[70%] mx-auto z-10">
            <div className="flex flex-col gap-[1rem]">
                <button 
                    className="rounded-full bg-white border border-black w-[50px] h-[50px] flex justify-center items-center transition-all duration-500 active:scale-110 hover:scale-110 cursor-pointer text-black text-4xl font-[700] active:bg-green-700 active:text-white hover:shadow-button mx-auto"
                    onClick={props.showForm}
                >+</button>
                
                <span className="mt-0 mx-auto font-[Lato]">Add collection</span>
            </div>
            
            <div className="flex flex-col gap-[1rem]">
                <button className="rounded-full bg-white border border-black w-[50px] h-[50px] flex justify-center items-center transition-all duration-500 active:scale-110 hover:scale-110 cursor-pointer text-black text-4xl font-[700] active:bg-red-700 active:text-white active:border-white hover:shadow-button mx-auto">&#128465;</button>
                <span className="mt-0 mx-auto font-[Lato]">Delete all</span>
            </div>
        </footer>
    )
}