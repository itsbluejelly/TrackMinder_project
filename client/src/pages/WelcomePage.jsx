import { Link } from 'react-scroll'

export default function WelcomePage(){
    return(
        <div 
            className="flex flex-col scroll-smooth bg-light-theme dark:bg-dark-theme transition-all duration-500 min-h-[100vh] overflow-x-hidden"
            id="welcome-page"
        >
            <div 
                className="flex flex-col justify-around items-center transition-all duration-500 h-[100vh]"
                id="page1"
            >
                <figure>
                    <img 
                        src="/img/TrackMinder_logo.png" 
                        alt="TrackMinder Logo"
                        title="TrackMinder Logo"
                        width="100%"
                        height="100%" 
                    />
                    
                    <figcaption
                        className="dark:text-white font-[Lato] font-[700] text-2xl leading-10 tracking-wider"
                    >
                        <p>TrackMinder</p>
                    </figcaption>
                </figure>

                
                <Link 
                    to='page2' 
                    smooth={ true }
                >
                    <div className="text-xl dark:text-white text-center rounded-[50px] w-[200px] p-[20px] dark:shadow-popup dark:bg-[#8875FF] shadow-xl bg-white cursor-pointer transition-all duration-500 animate-bounce">Next</div>
                </Link>
            </div>
            
            <div 
                className="flex justify-around items-center transition-all duration-500 flex-col relative h-[100vh]"
                id="page2"
            >
                <p
                    className="dark:text-white font-[Lato] font-[700] text-2xl leading-10 tracking-wider transition-all opacity-10 hover:opacity-100 duration-500 cursor-pointer"
                >Organize Your Tasks</p>

                <p
                    className="dark:text-white font-[Lato] font-[700] text-2xl leading-10 tracking-wider absolute transition-all opacity-10 hover:opacity-100 duration-500 cursor-pointer"
                >Easily</p>

                <Link 
                    to='page3' 
                    smooth={ true }
                >
                    <div className="text-xl dark:text-white text-center rounded-[50px] w-[200px] p-[20px] shadow-xl transition-all duration-500 animate-bounce cursor-pointer bg-light-theme dark:shadow-popup dark:bg-dark-theme dark:border dark:border-[#8E7CFF]">Next</div>
                </Link>
            </div>
            
            <div 
                className="flex items-center flex-col min-w-[100vw] justify-around h-[100vh]"
                id="page3"
            >
                <header 
                    className="flex flex-col gap-[1rem]"
                >
                    <h1 
                        className="text-center dark:text-white font-[Lato] font-[700] text-[2rem] leading-10 tracking-wider mb-[20px] underline"
                    >Welcome to TrackMinder</h1>
                    
                    <h3 className="dark:text-white font-[Lato] font-[700] text-xl leading-10 text-justify w-[300px] mx-auto hover:underline tracking-wide">Please login to your account or create new account to continue</h3>
                </header>

                <div className="buttons flex flex-col items-center gap-[2rem] mb-[20px]">
                    <div className="text-xl dark:text-white text-center rounded-[50px] w-[315px] p-[20px] dark:shadow-popup dark:bg-[#8875FF] shadow-xl bg-white cursor-pointer transition-all duration-500 hover:w-[350px] focus:w-[350px] active:bg-black active:text-white dark:active:bg-white dark:active:text-black">Login</div>
                    
                    <div className="text-xl dark:text-white text-center rounded-[50px] w-[315px] bg-button-light-theme p-[20px] shadow-2xl dark:border-[#8E7CFF] cursor-pointer bg-light-theme dark:shadow-popup dark:bg-dark-theme dark:border transition-all duration-500 hover:w-[350px] focus:w-[350px] dark:active:bg-white dark:active:text-black active:bg-black active:text-white">Sign up</div>
                </div>
            </div>
        </div>
    )
}