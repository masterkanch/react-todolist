import React from 'react'
import {useState} from 'react'
const Form = ({onAdd}) => {
    const [text, settext] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text){
            alert('Please add task')
            return
        }
        onAdd(text)
        settext('')
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <input 
                type='text'
                placeholder='AddTask'
                value={text}
                onChange={(e) => settext(e.target.value)}>
                </input>
                <input type='submit'value='savetask'/>
            </div>
        </form>
    )
}

export default Form
