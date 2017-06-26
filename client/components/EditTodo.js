import React from 'react';

const EditTodo = (props) => {
  const { todo, updateTodo } = props;

  const onSubmit = (event) => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which == 13);
    const isLongEnough = text.length > 0;

    if (isEnterKey && isLongEnough) {
      input.value = '';
      updateTodo(todo.get('id'), text);
    }
  };

  return (
    <div>
      <label className="todo__old_text">
        <span><b>Old Todo Text: </b>{todo.get('text')}</span>
      </label>
      <input
        type='text'
        className='todo__entry'
        onKeyDown={onSubmit}
      />
      <span className='todo__informatory_text'>
        Tip: The text should not be empty. After inserting any text please press enter to update Todo.
      </span>
    </div>
  );
}

export default EditTodo;
