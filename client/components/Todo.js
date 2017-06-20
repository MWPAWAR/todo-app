import React from 'react';

const Todo = ({ todo }) => {
  if (todo.isDone) {
    return <strike>{todo.text}</strike>;
  }

  return <span>{todo.text}</span>;
}

export default Todo;
