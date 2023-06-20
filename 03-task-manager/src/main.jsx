
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TaskContextProvider } from './context/TaskContext.jsx'

const root = ReactDOM.createRoot(document.getElementById('app')) // creo el punto donde voy a renderizar mi app
//colocamos el TaskContextProvider como contenedor del App
root.render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
)
