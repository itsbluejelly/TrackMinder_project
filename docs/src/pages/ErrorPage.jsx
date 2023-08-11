// IMPORTING NECESSARY MODULES AND HOOKS
import { NavLink } from "react-router-dom"
import StyleContextHook from "../hooks/StyleContextHook"

export default function ErrorPage(){
    // OBTAINING DARKMODE AND DISPATCH FUNCTION FROM HOOK
    const {darkMode, dispatch} = StyleContextHook()

    // AN OBJECT OF STYLE PROPERTIES
    const styles = {
        errorPage: {
            dark: { backgroundColor: "#121212" },
            light: { backgroundColor: "rgba(244, 194, 127, 0.67)" }
        },

        errorImage: {dark: { boxShadow: "10px 5px 10px black" }},
        errorCaption: {dark: { color: "white" }}
    }


    return(
        // AN ERROR PAGE HOLDING THE WHOLE ERROR PAGE CONTENTS
        <figure 
            className="flex justify-center items-center min-h-[100vh] flex-col scroll-smooth transition-all duration-500"
            id="error-page"
            style={darkMode ? styles.errorPage.dark : styles.errorPage.light}
        >
            <img 
                className="mb-[20px] w-[70%] lg:w-[50%] mt-[50px]"
                src="/img/404_image.png" 
                alt="Error image" 
                title="Error image"
                id="error-image"
                width="371"
                height="278"
                style={darkMode ? styles.errorImage.dark : null} 
            />
            
            <figcaption 
                className="mb-[20px]"
                id="error-caption"
                style={darkMode ? styles.errorCaption.dark : null}
            >
                <h1
                    className="text-xl font-[600] leading-[3rem] w-[20ch]"
                >Oh no, it appears the page you are looking for is Not Found(404)</h1>
                
                {/* A LINK TO THE WELCOME ROUTE */}
                <p>
                    Perhaps try visiting <NavLink to='/TrackMinder_project' className="underline hover:text-lg transition-all duration-500 active:text-white dark:active:text-[#8875FF]">the home page</NavLink>.
                </p>
            </figcaption>
        </figure>
    )
}