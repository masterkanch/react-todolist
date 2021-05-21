import React from 'react'

const Task = ({lists}) => {
    console.log(lists['id'])
    console.log(lists['task'])
    console.log(lists)
    return (
          <h3>{lists.task}</h3>
    )
}

export default Task
