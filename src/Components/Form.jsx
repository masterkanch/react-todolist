import React from 'react'

const Form = () => {
    return (
        <form className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input 
                type='text'
                placeholder='AddTask'>
                </input>
                <input type='submit'value='savetask'/>
            </div>
        </form>
    )
}

export default Form
