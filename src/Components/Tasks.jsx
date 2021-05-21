import React from 'react'
import Task from './Task'
const Tasks = ({lists}) => {
    console.log(lists.id)
    console.log(lists.task)
    return (
        <div>
            {lists.map((lists) => <Task key={lists.id} lists={lists}/>)}
        </div>
    )
}

export default Tasks
