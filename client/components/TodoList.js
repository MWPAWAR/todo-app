import React from 'react';
import Todo from '../components/Todo';

const TodoList = (props) => {
  const { todos, toggleTodo } = props;
  const toggleClick = id => event => toggleTodo(id);

  return (
    <ul className='todo__list'>
      {todos.map(t => (
        <li key={t.get('id')}
            className='todo__item'
            onClick={toggleClick(t.get('id'))}>
          <Todo todo={t.toJS()} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
