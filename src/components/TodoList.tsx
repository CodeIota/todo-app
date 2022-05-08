import React from 'react'

interface TodoType {
    items: {id: string; text: string}[]
}

const TodoList: React.FC<TodoType> = (props) => {
    
  return (
    <ul>
        {props.items.map((t) => <li key={t.id}>{t.text}</li>)}
    </ul>
  )
}

export default TodoList