import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserContextProvider from './contexts/UserContext.jsx'
import CollectionContextProvider from './contexts/CollectionContext.jsx'
import TaskContextProvider from './contexts/TaskContext.jsx'
import StyleContextProvider from './contexts/StyleContext.jsx'
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyleContextProvider>
      <TaskContextProvider>
        <CollectionContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </CollectionContextProvider>
      </TaskContextProvider>
    </StyleContextProvider>
  </React.StrictMode>,
)
