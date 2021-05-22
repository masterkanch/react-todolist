import React from 'react'
import Task from './Task'
const Tasks = ({lists,onDelete}) => {
    return (
        <div>
            {lists.map((lists) => <Task key={lists.id} lists={lists} onDelete={onDelete}/>)}
        </div>
    )
}

export default Tasks
