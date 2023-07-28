import { NavLink } from "react-router-dom"

export default function ErrorPage(){
    return(
        <figure 
            className="error-page flex justify-center items-center min-h-[100vh] flex-col font-[Poppins] scroll-smooth dark:bg-dark-theme bg-light-theme transition-all duration-500"
        >
            <img 
                className="dark:shadow-popup mb-[20px] w-[70%]"
                src="/img/404_image.png" 
                alt="Error image" 
                title="Error image"
                width="371"
                height="278" 
            />
            
            <figcaption className="dark:text-white mb-[20px]">
                <h1
                    className="text-xl font-[600] leading-[5rem]"
                >404, Page Not Found</h1>
                
                <p>Perhaps try visiting <NavLink to='/' className="underline hover:text-lg transition-all duration-500 active:text-white dark:active:text-[#8875FF]">the home page</NavLink>.</p>
            </figcaption>
        </figure>
    )
}