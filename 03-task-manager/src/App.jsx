import React, { useEffect } from "react"
import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"


function App() {


    return (
        <main className="bg-zinc-900  min-h-screen  pb-14">
            <div className="container w-5/6 mx-auto">
                <TaskForm />
                <TaskList />
            </div>
        </main>
    )
}


export default App

