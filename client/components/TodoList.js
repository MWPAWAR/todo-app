import React from 'react';
import Todo from '../components/Todo';

const TodoList = (props) => {
  const { 
    todos, 
    toggleTodo, 
    deleteTodo, 
    editTodo 
  } = props;
  const onComplete = id => event => toggleTodo(id);
  const onDelete = id => event => deleteTodo(id);
  const onEdit = id => event => editTodo(id);

  return (
    <ul className='todo__list'>
      {todos.map(t => (
        <li key={t.get('id')}
            className='todo__item'>
          <Todo todo={t.toJS()} />
          <button
            className="todo__complete" 
            onClick={onComplete(t.get('id'))}
          >
            {t.get('isDone') ? 'Unmark' : 'Mark'}
          </button>
          <button 
            className="todo__delete" 
            onClick={onDelete(t.get('id'))}
          >
            Delete
          </button>
          <button 
            className="todo__edit" 
            onClick={onEdit(t.get('id'))}
          >
            Edit
          </button>

        </li>
      ))}
    </ul>
  );
}

export default TodoList;
