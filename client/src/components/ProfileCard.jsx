// EXPORTING PROFILECARD FUNCTION COMPONENT
export default function ProfileCard(props){
    return(
        <div>
            <div 
                className="bg-light-theme min-w-[75%] min-h-[75vh] rounded-[35px] shadow-titleCard dark:bg-dark-theme md:min-w-[400px]"
                id="profile-card"
            >
                <div 
                    className="min-h-[30vh] bg-white rounded-t-[35px] justify-center items-center flex flex-col"
                    id="profile-image-section"
                >
                    <div 
                        id="profile-pic-border"
                        className="stroke-[3px] w-[90px] h-[90px] rounded-full border-[3px] border-[#D8605B] dark:border-[#0F4E52] justify-center items-center flex animate-pop-up mt-[5px]"
                    >
                        <div 
                            id="profile-pic" 
                            className="stroke-[3px] w-[80px] h-[80px] rounded-full border-[3px] bg-[#D8605B] dark:bg-[#0F4E52] justify-center items-center font-[700] flex text-2xl transition-all duration-500 hover:scale-110"
                        >{props.username.slice(0, 3)}</div>
                    </div>

                    <p 
                        className="animate-pop-up font-[700] text-lg text-black"
                        id="username"
                    >{props.username}</p>
                    
                    <p 
                        className="animate-pop-up text-[#D8605B] dark:text-[#0F4E52] font-[700]"
                        id="email"
                    >{props.email}</p>
                </div>

                <div 
                    id="extra-info-container" 
                    className="flex flex-col gap-[2rem]"
                >
                    <div 
                        className="flex justify-between p-[10px] border-b-black border-b-[2px] text-xl font-[600] dark:border-b-white hover:scale-105 transition-all duration-500 animate-pop-up"
                        id="username-tag"
                    >
                        <p className="pl-[10px]  hover:underline hover:text-white transition-all duration-500 dark:hover:text-cyan-200 text-sm">Username</p>
                        <p className="pr-[10px] hover:underline hover:text-white transition-all duration-500 dark:hover:text-cyan-200">{props.username}</p>
                    </div>

                    <div 
                        className="flex justify-between p-[10px] border-b-black border-b-[2px] text-xl font-[600] dark:border-b-white hover:scale-105 transition-all duration-500 animate-pop-up"
                        id="email-tag"
                    >
                        <p className="pl-[10px]  hover:underline hover:text-white transition-all duration-500 dark:hover:text-cyan-200 text-sm">Email</p>
                        <p className="pr-[10px] hover:underline hover:text-white transition-all duration-500 dark:hover:text-cyan-200 hover:">{props.email}</p>
                    </div>

                    <div 
                        className="flex justify-between p-[10px] border-b-black border-b-[2px] text-xl font-[600] dark:border-b-white hover:scale-105 active:bg-white transition-all duration-500 cursor-pointer bg-yellow-500 text-black hover:rounded-[25px] dark:text-white active:text-yellow-500 hover:shadow-knob animate-pop-up"
                        id="logout-button"
                    >
                        <p className="pr-[10px] hover:underline hover:text-white transition-all duration-500 dark:hover:text-cyan-200 text-sm break-words max-w-[20ch]">Deactivate your account temporarily</p>
                        <p className="pl-[10px] hover:text-white transition-all duration-500 dark:hover:text-white">Log Out</p>
                    </div>
                    
                    <div 
                        className="flex justify-between p-[10px] text-xl font-[600] bg-red-700 rounded-b-[25px] h-full hover:scale-105 active:bg-white transition-all duration-500 cursor-pointer hover:rounded-[25px] active:text-red-700 hover:shadow-knob animate-pop-up"
                        id="signout-button"
                    >
                        <p className="pl-[10px]  hover:underline hover:text-white transition-all duration-500 dark:hover:text-cyan-200 text-sm">Delete account permanently</p>
                        <p className="pr-[10px] hover:text-white transition-all duration-500 dark:hover:text-black">Sign Out</p>
                    </div>
                </div>
            </div>
        </div>
    )
}