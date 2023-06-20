import React, { useState, useEffect } from "react"
// import { tasks as data } from "../data/task.js" 
import { createContext } from "react"  // importamos una fx especial de react para darle contexto

//ejecutamos la funcion que nos devuelve un objeto que almacena los datos que lo voy a asociar a una const TaskContext
export const TaskContext = createContext()



//TaskContext.Provider es el nombre del componente especifico que engloba al resto de los componentes
export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState(() => {
        const taskFromStorage = window.localStorage.getItem('tasks')
        if (taskFromStorage) return JSON.parse(taskFromStorage)
        return ""
    })

    // utilizo useEffect para  inicializar tasks cuando cargue el componente

    // esta funcion sera inicializada en TaskForm y luego tomada y mostrada en TaskList

    function createTask(task) {
        //le decimos que "tasks" se va a actualizar creando un nuevo array de objetos [...tasks] y que va a agregarle un objeto
        // donde y lo voy a definir pasandole el task y que si lo descomponemos contiene { title: title, description: description}. 
        // El valor title esta refrenciado a newTask dentro de TaskForm
        setTasks([...tasks, {
            title: task.title,
            id: tasks.length,
            description: task.description
        }])

        saveTaskFromStorage([...tasks, { 
            title: task.title, 
            id: tasks.length,
            description: task.description 
        }])

    }
    // Almacenamos la funcion en el localStorage
    function saveTaskFromStorage(newTask) {
        window.localStorage.setItem('tasks', JSON.stringify(newTask))
    }

    function deleteTask(taskId) {
        //devuelve un nuevo arrray sin el elem que cumple la condicion, aqui se compara el Id que le estamos pasando en el taskId con el Id propio de cada tarea
        // se compara con la negativa, devolviendo true en el array los elementos uqe no son iguales al taskId y eliminando (xq la cond. devuelve false) cuadno hay match
        setTasks(tasks.filter(task => task.id !== taskId))
        removeTaskFromStorage(taskId)
    }
    
    function removeTaskFromStorage(taskId) {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        window.localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }


    //le pasamos el atributo value ya que a traves del cual las funciones pueden acceder a los datos en el contexto 
    // y se lo pasamos a traves de un objeto que va a contener propiedades y como valores le vamos a pasar las funcionesu/arreglos/objetos que queremos compartir
    return (
        <TaskContext.Provider value={{
            tasks: tasks,
            createTask: createTask,
            deleteTask: deleteTask
        }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

