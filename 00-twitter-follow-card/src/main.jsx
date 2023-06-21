// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
)


// un componente es una funcion que devuelve un elemento. En react en vez de crear variables que contengan funciones,
// SI nombramos las const con la 1era Mayusc lo que le decimos a react es que eso es un componente  ( PascalCase)

/* CUAL ES LA DIFRENCIA ENTRE COMPONENTE Y ELEMENTO =???

Un componente es un factoria de elementos, es decir una fucnion que al ejecutarla te dvuelve un elemento
y el elemento es lo que se renderiza (react renderiza elementos)
*/