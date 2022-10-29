import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) return;

        const newTodos = [...todos, todo];

        setTodos(newTodos);
    }

    const updatedTodo = (todoId, newVal) => {
        if (!newVal || /^\s*$/.test(newVal.text)) return;

        setTodos(prev => prev.map(item => (item.id === todoId ? newVal : item)));
    }

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }

    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo
        })
        setTodos(updatedTodos);
    };

  return (
    <div>
      <h1>What Do We Need Todo Today?</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo todos={todos} 
      completeTodo={completeTodo}
      removeTodo={removeTodo}
      updateTodo={updatedTodo}
      />
    </div>
  )
}

export default TodoList
