import React, { useRef } from 'react'

interface NewTodoType {
    onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoType> = props => {
    const inputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredRef = inputRef.current!.value

        props.onAddTodo(enteredRef)
    }

  return (
    
        <form onSubmit={submitHandler}> 
            <div>
                <label>Nuevo todo</label>
                <input type="text" id="todo-text" ref={inputRef}/>
            </div>
            <button type="submit">Guardar</button>
        </form>
  )
}

export default NewTodo