// IMPORTING NECESSARY MODULES

// EXPORTING THE PROFILEPAGE FUNCTION
export default function ProfilePage(){
    return (
        // A PROFILE-PAGE-CONTAINER THAT HOLDS THE PROFILE CARD IN PLACE
        <div className="bg-light-theme-gradient min-h-[100vh] dark:bg-dark-theme-gradient flex justify-center items-center dark:text-dark-theme-text">
            {/* THE PROFILE CARD WHICH CONTAINS ALL ACCOUNT INFO */}
            <div className="bg-light-theme min-w-[75%] min-h-[75vh] rounded-[35px] shadow-titleCard dark:bg-dark-theme md:min-w-[400px]">
                {/* A DIV HOUSING THE PROFILE IMAGE */}
                <div className="min-h-[30vh] bg-white rounded-t-[35px] justify-center items-center flex flex-col">
                    <div 
                        id="profile-pic-border"
                        className="stroke-[3px] w-[90px] h-[90px] rounded-full border-[3px] border-[#D8605B] dark:border-[#0F4E52] justify-center items-center flex animate-pop-up mt-[5px]"
                    >
                        <div 
                            id="profile-pic" 
                            className="stroke-[3px] w-[80px] h-[80px] rounded-full border-[3px] bg-[#D8605B] dark:bg-[#0F4E52] justify-center items-center font-[700] flex text-2xl transition-all duration-500 hover:scale-110"
                        >Ron</div>
                    </div>

                    <p className="animate-pop-up font-[700] text-lg text-black">Username</p>
                    <p className="animate-pop-up text-[#D8605B] dark:text-[#0F4E52] font-[700]">Email@email.com</p>
                </div>

                {/* THE EXTRA CONTENT INFO CONTAINER */}
                <div 
                    id="extra-info-container" 
                    className="flex flex-col gap-[2rem]"
                >
                    <div className="flex justify-between p-[10px] border-b-black border-b-[2px] text-xl font-[600] dark:border-b-white hover:scale-105 transition-all duration-500">
                        <p className="pl-[10px]  hover:underline hover:text-white transition-all duration-500 dark:hover:text-cyan-200 text-sm">Username</p>
                        <p className="pr-[10px] hover:underline hover:text-white transition-all duration-500 dark:hover:text-cyan-200">Ronnie</p>
                    </div>

                    <div className="flex justify-between p-[10px] border-b-black border-b-[2px] text-xl font-[600] dark:border-b-white hover:scale-105 transition-all duration-500">
                        <p className="pl-[10px]  hover:underline hover:text-white transition-all duration-500 dark:hover:text-cyan-200 text-sm">Email</p>
                        <p className="pr-[10px] hover:underline hover:text-white transition-all duration-500 dark:hover:text-cyan-200 hover:">Ronnie@gmail.com</p>
                    </div>

                    <div className="flex justify-between p-[10px] border-b-black border-b-[2px] text-xl font-[600] dark:border-b-white text-red-400 hover:scale-105 active:bg-white transition-all duration-500">
                        <p className="pr-[10px] hover:underline hover:text-white transition-all duration-500 dark:hover:text-cyan-200 text-sm break-words max-w-[20ch]">Deactivate your account temporarily</p>
                        <button className="pl-[10px] hover:text-white transition-all duration-500 dark:hover:text-white">Log Out</button>
                    </div>
                    
                    <div className="flex justify-between p-[10px] text-xl font-[600] bg-red-700 rounded-b-[25px] h-full hover:scale-105 active:bg-white transition-all duration-500">
                        <p className="pl-[10px]  hover:underline hover:text-white transition-all duration-500 dark:hover:text-cyan-200 text-sm">Delete account permanently</p>
                        <button className="pr-[10px] hover:text-white transition-all duration-500 dark:hover:text-black">Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}