import React, { useState } from "react";
//Importamos la funcion de react que permite utilizar la funcion Context
import { useContext } from 'react'
// Importamos el TaskContext que es el contexto que contiene los datos que queremos traer
import { TaskContext } from "../context/TaskContext";

function TaskForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    //llamamos a la funcion useContext y le decimos que vamos a utilizar el contexto llamado TaskContext
    // y de todos las propiedades asignadas en el atrib "value" el elemento TaskContext.Provider solo voy a extraer la fx
    const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) => { 
        e.preventDefault();
        //con elhandleSubmit le pasamos como valor un objeto que contenga el titulo y la descripcion
        createTask({
            title,
            description,
        })
        setTitle('')
        setDescription('')
    }

    return (
        <form className="bg-slate-800 p-10 mb-4 max-w-md mx-auto" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold text-white mb-3">Create your task</h1>
            <input
                type="text"
                placeholder="Task title"
                onChange={(inputText) => setTitle(inputText.target.value)}
                value={title}
                className="bg-slate-200 p-3 w-full mb-2"
                autoFocus
                />
            <textarea
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                className="bg-slate-200 p-3 w-full mb-2"
                value={description}
            />
            <button className="bg-indigo-500 px-6 py-1 text-white hover:bg-indigo-400 rounded-md">Save</button>
        </form>
    )
}

export default TaskForm