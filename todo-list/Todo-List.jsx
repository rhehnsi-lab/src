import { useState } from 'react'
import TodoItem from './Todo-item'

export default function TodoList() {
    const [tasks, setTasks] = useState(['לקנות חלב', 'ללמוד', ' לשמור על הקטנים '])
    const [newTask, setNewTask] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        const trimmed = newTask.trim()
        if (trimmed === '' || tasks.includes(trimmed)) return
        setTasks(prev => [...prev, trimmed])
        setNewTask('')
    }

    return (
        <div>
            <h1>my tasks</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">add task...</label>
                <input
                    id="task"
                    type="text"
                    value={newTask}
                    onChange={event => setNewTask(event.target.value)}
                />
                <button type="submit">אישור</button>
            </form>
            <ul>
                {tasks.map(task => (
                    <TodoItem key={task} title={task} />
                ))}
            </ul>
        </div>
    )
}