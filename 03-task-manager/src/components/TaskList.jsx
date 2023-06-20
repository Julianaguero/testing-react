import React from "react"
import TaskCard from "./TaskCard"
//Importamos la funcion de react que permite utilizar la funcion Context
import { useContext } from 'react'
// Importamos el TaskContext que es el contexto que contiene los datos que queremos traer
import { TaskContext } from "../context/TaskContext";


function TaskList() {

    //llamamos a la funcion useContext y le decimos que vamos a utilizar el contexto llamado TaskContext
    // y de todos las propiedades asignadas en el atrib "value" el elemento TaskContext.Provider solo voy a extraer la fx
    const { tasks } = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h2 className="text-white text-1xl md:text-2xl text-center">You haven't added any tasks yet... 😔</h2>
    }

    return (
        <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols1 gap-2 grid-auto-rows-auto">
            {tasks.map((task) => {
                return (
                    <TaskCard key={task.id} task={task} />
                )
            })}
        </div>
    )
}

export default TaskList