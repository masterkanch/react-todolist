import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({lists,onDelete}) => {
    return (
        <div className="task">
          <h3>
                {lists.task}
                <FaTimes 
                style={{color:'red',cursor:'pointer'}}
                onClick={() => onDelete(lists.id)}
                /> 
          </h3>
        </div>
    )
}

export default Task
