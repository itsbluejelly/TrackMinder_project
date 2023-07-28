// IMPORTING NECESSARY MODULES, LAYOUTS AND COMPONENTS
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'

// DEFINING A ROUTER TO DEAL WITH ALL NECESSARY ROUTE PATHS
const router = createBrowserRouter(
  createRoutesFromElements(
    // THE ROOT PATH TO ENCLOSE ALL ROUTES(/)
    <Route path='/'>
      {/* /welcome || /login || /signup */}
      <Route path='/'>
        <Route path='welcome'></Route>
        <Route path='login'></Route>
        <Route path='signup'></Route>
      </Route>

      {/* /home/collections || /home/tasks || /home/user */}
      <Route path='home'>
        <Route path='collections'>
          {/* home/collections/collection/:id */}
          <Route path='collection/:id'></Route>
        </Route>

        <Route path='tasks'>
          {/* home/tasks/task/:id */}
          <Route path='task/:id'></Route>
        </Route>

        <Route path='user'>
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
      <div className="main-container">
        <RouterProvider router={router}/>
      </div>
    )
}
