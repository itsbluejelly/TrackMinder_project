// IMPORTING NECESSARY MODULES, LAYOUTS AND COMPONENTS
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import WelcomePage from './pages/WelcomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import CollectionsPage from './pages/CollectionsPage.jsx'
import TasksPage from './pages/TasksPage.jsx'
import RootLayout from './layouts/RootLayout.jsx'
import HomeLayout from './layouts/HomeLayout.jsx'
import UserLayout from './layouts/UserLayout.jsx'

// DEFINING A ROUTER TO DEAL WITH ALL NECESSARY ROUTE PATHS
const router = createBrowserRouter(
  createRoutesFromElements(
    // THE ROOT PATH TO ENCLOSE ALL ROUTES(/)
    <Route path='/'>
      {/* /welcome || /login || /signup */}
      <Route path='/' element={ <RootLayout/> }>
        <Route path='welcome' element={ <WelcomePage/> }></Route>
        <Route path='login' element={ <LoginPage/> }></Route>
        <Route path='signup' element={ <SignupPage/> }></Route>
      </Route>

      {/* /home/collections || /home/tasks || /home/user */}
      <Route path='home' element={ <HomeLayout/> }>
        <Route path='collections' element={ <CollectionsPage/> }></Route>
          {/* home/collection/:id */}
        <Route path='collection/:id' element={ <TasksPage/> }></Route>

        <Route path='user' element={<UserLayout/>}>
          {/* /home/user/profile || /home/user/signout */}
          <Route path='profile'></Route>
          <Route path='signout'></Route>
        </Route>
      </Route>
      
      <Route path ="/*" element={<ErrorPage/>}></Route>
    </Route>
  )
)

// EXPORTING APP COMPONENT
export default function App(){
  return(
    <div 
      id="main-container" 
      className="font-[Poppins]"
    >
      <RouterProvider router={router}/>
    </div>
  )
}
