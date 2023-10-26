import { useEffect, useState } from 'react'
import FormData from '../FormData'
import ListTask from '../ListTask'

const Task = () => {
  const [task, setTask] = useState(JSON.parse(localStorage.getItem('list')) || [])

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(task))
  }, [task])

  const handleSavedTask = (data) => {
    setTask([...task, data])
  }

  

  const deleteTask = (index) => {
    const del = [...task]
    del.splice(index, 1)
    setTask(del)
  }

  

  return (
    <>
      <FormData onAddTask={handleSavedTask} />
      <ListTask task={task} setTask={setTask} deleteTask={deleteTask}/>
    </>
  )
}

export default Task
