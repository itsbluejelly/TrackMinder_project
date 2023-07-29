// IMPORTING NECESSARY MODULES
import NavBar from "../components/NavBar"
import CollectionCell from "../components/CollectionCell"
import Footer from "../components/Footer"

// EXPORTING A COLLECTIONSPAGE FUNTION
export default function CollectionsPage(){
    return(
        // A COLLECTIONS PAGE CONTAINER THAT HOLDS ALL NECESSARY COLLECTIONS
        <div 
            id="collections-page"
            className="min-h-screen bg-light-theme scroll-smooth dark:bg-dark-theme dark:text-dark-theme-text transition-all duration-500 relative"
        >
            {/* A NAVBAR TO DIRECT TO THE HOME PAGE, OR THE USER PROFILE */}
            <NavBar/>
            
            {/* A GRID OR FLEX CONTAINER FOR ALL COLLECTIONS */}
            <div className="lg:grid grid-flow-row lg:grid-cols-3 gap-2 flex flex-col justify-center items-center md:grid md:grid-cols-2">
                <CollectionCell/>
                <CollectionCell/>
                <CollectionCell/>
                <CollectionCell/>
            </div>
            
            {/* A FOOTER TO EITHER DELETE ALL OR ADD A COLLECTION */}
            <Footer/>
            
        </div>
    )
}