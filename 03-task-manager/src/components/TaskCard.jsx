import React from "react";
import { useContext } from 'react'
import { TaskContext } from "../context/TaskContext";

//la prop task la esta recibiendo del map de TaskList
function TaskCard({ task }) {

    const { deleteTask } = useContext(TaskContext)

    return (
        <div className="bg-gray-800 text-white p-4 rounded-md grid content-between ">
            <h1 className="text-xl font-bold capitalize mb-4">{task.title}</h1>
            <p className="text-gray-500 text-sm mb-6   max-h-content">{task.description}</p>
            <button className="bg-red-500 px-2 py-1 rounded-md hover:bg-red-400" onClick={() => deleteTask(task.id)}>Remove Task</button>
        </div>
    )
}

export default TaskCard