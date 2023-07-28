// EXPORTING THE LOGIN PAGE
export default function LoginPage(){
    return(
        // A LOGIN-PAGE CONTAINER THAT HOLDS ALL LOGIN PAGE CONTENT
        <div 
            id="login-page"
            className="bg-light-theme dark:bg-dark-theme scroll-smooth min-h-[100vh] dark:text-dark-theme-text font-[Lato] transition-all duration-500 pl-[30px] flex flex-col justify-evenly"
        >
            <h1 className="font-[700] text-2xl top-[50px] py-[50px] text-left md:text-center">Login</h1>

            <div 
                id="form"
                className="flex flex-col md:flex-row md:items-center gap-[60px] md:justify-around"
            >
                <div id="username-field">
                    <p>Username</p>
                    
                    <input
                        type="text"
                        name="username"
                        required
                        autoComplete="on"
                        placeholder="Your username here"
                        className="dark:rounded-[4px] dark dark:border-[#979797] dark:bg-[#1D1D1D] dark:text-[#535353] p-[10px] w-[90%] md:w-[100%] rounded-[22px] transition-all duration-500"

                    />
                </div>

                <div id="email-field">
                    <p>Email</p>
                    
                    <input 
                        type="email" 
                        name="email"
                        required
                        placeholder="Your email here"
                        className="dark:rounded-[4px] dark dark:border-[#979797] dark:bg-[#1D1D1D] dark:text-[#535353] p-[10px] w-[90%] md:w-[100%] rounded-[22px] transition-all duration-500"
                    />
                </div>

                <div id="password-field">
                    <p>Password</p>
                    
                    <input 
                        type="password" 
                        name="password" 
                        required
                        placeholder="Your password here"
                        className="dark:rounded-[4px] dark dark:border-[#979797] dark:bg-[#1D1D1D] dark:text-[#535353] p-[10px] w-[90%] md:w-[100%] rounded-[22px] transition-all duration-500"
                    />
                </div>
            </div>

            <button className="my-[20px] bg-light-theme-gradient w-[315px] mx-auto h-[56px] rounded-[50px] text-white font-[700] tracking-wider text-lg shadow-button dark:shadow-xl dark:rounded-[5px] dark:bg-dark-theme-gradient transition-all duration-500 dark:active:bg-white active:text-black">Login</button>

            <p className="mb-[30px] text-center tracking-wide">Don't Have an account? <span className="text-[#D8605B] font-[700] cursor-pointer dark:text-[#8875FF] hover:underline transition-all duration-500 active:text-white">sign up</span></p>
        </div>
    )
}