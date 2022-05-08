import React, { useState } from 'react'
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'
import { Todo } from './models/todos'


const App: React.FC = () => {

  

  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    setTodos( (prevTodo) => [...prevTodo, { id: Math.random().toString(), text: text }])
  }


  return (
    <div>
      <NewTodo onAddTodo={addTodo} />
      <TodoList items={todos} />
    </div>
  )
}

export default App