import React, {useEffect, useState} from "react"
import {todolistAPI} from "../api/todolist-api";


export default {
    title: "API"
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolists()
            .then((response) => setState(response.data))
    }, [])
    return <div>
        {JSON.stringify(state)}
    </div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [inputValue, setInputValue] = useState("")

    const createTodolist = () => {
        todolistAPI.createTodolist(inputValue)
            .then((response) => setState(response.data))
    }
    return <div>
        {JSON.stringify(state)}
        <div>
            <input type="text" placeholder="title" onChange={(e) => setInputValue(e.currentTarget.value)}/>
            <button onClick={createTodolist}>Create Todolist</button>
        </div>
    </div>
}